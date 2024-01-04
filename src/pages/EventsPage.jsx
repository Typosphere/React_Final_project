// @ts-nocheck
import React, { useEffect } from "react";
import { Filter } from "../components/Filter";
import { useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";

//Data Loader
export const loader = async ({}) => {
  const event = await (
    await fetch(`https://my-json-server.typicode.com/Typosphere/React_Final_project/events/`)).json();
  const categories = await (
    await fetch("https://my-json-server.typicode.com/Typosphere/React_Final_project/categories/")
  ).json();
  const users = await (await fetch("https://my-json-server.typicode.com/Typosphere/React_Final_project/users/")).json();

  return [event, categories, users];
};

export const EventsPage = () => {
  const [event, categories] = useLoaderData();

  //Jump to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={"Don't miss it!"} />
      <Filter events={event} category={categories} />
    </>
  );
};
