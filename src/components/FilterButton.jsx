// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

export const FilterButton = ({ keyy, value, onClick, title }) => {
  return (
    <Button
      key={keyy}
      value={value}
      onClick={onClick}
      color="white"
      background="#388aa1"
      _hover={{ background: "#79c5db" }}
    >
      {title}
    </Button>
  );
};

//Prop validation

FilterButton.propTypes = {
  keyy: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
