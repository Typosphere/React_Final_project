// @ts-nocheck
import {
  Button,
  Center,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Event } from "../components/Event";
import { Buttons } from "../components/Buttons";

//Data loader
export const Loader = async ({ params }) => {
  const event = await (
    await fetch(`https://my-json-server.typicode.com/Typosphere/React_Final_project/events/${params.eventId}`)
  ).json();
  const categories = await (
    await fetch(`https://my-json-server.typicode.com/Typosphere/React_Final_project/categories/`)
  ).json();
  const users = await (await fetch(`https://my-json-server.typicode.com/Typosphere/React_Final_project/users/`)).json();

  return [event, categories, users];
};

export const EventPage = () => {
  const [event, categories, users] = useLoaderData();

  //Navigation hook
  const history = useNavigate();

  //Pop up message hook
  const toast = useToast();

  //Modal actions
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Delete request
  const handleDelete = async () => {
    const response = await fetch("https://my-json-server.typicode.com/Typosphere/React_Final_project/events/" + event.id, {
      method: "DELETE",
    });
    if (response.ok) {
      toast({
        title: "Delete event",
        description: "We have successfully deleted the event!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      history("/");
    } else {
      toast({
        title: "Event wasn't deleted",
        description: "Oops,something went wrong!",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  // Jump to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Center display="flex" flexDir="column" rowGap={5} ml={{ lg: "20px" }}>
        <Flex direction="column">
          <Event event={event} category={categories} users={users} />
          <Flex
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignContent = {"center"}
            columnGap={{ md: 5 }}
            mt="50px"
          >
            <Link to={`/event/${event.id}/editevent`}>
              <Buttons title={"Edit event"}>Edit event</Buttons>
            </Link>
            <Buttons onClick={onOpen} title={"Delete Event"}>
              Delete Event
            </Buttons>
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose} size={{ lg: "lg" }}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="#2b647a">
                Are you sure you would like to delete this event?
              </ModalHeader>
              <ModalCloseButton />
              <ModalFooter display="flex">
                <Button
                  onClick={handleDelete}
                  color="white"
                  background="#368a5d"
                  mb="20px"
                  mr="10px"
                >
                  Yes
                </Button>
                <Button
                  onClick={onClose}
                  color="white"
                  background="#C53030"
                  mb="20px"
                >
                  No
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Center>
    </>
  );
};
