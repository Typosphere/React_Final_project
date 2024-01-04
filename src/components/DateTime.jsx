// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import { FormLabel, Input } from "@chakra-ui/react";

export const DateTime = ({ title, name, value, onChange }) => {
  return (
    <FormLabel mb="20px" fontSize="20px" color="#266069">
      {title}
      <Input
        type="datetime-local"
        name={name}
        value={value}
        onChange={onChange}
        mt="10px"
        backgroundColor="white"
        focusBorderColor="#3879a1"
        required
      />
    </FormLabel>
  );
};

//Prop validation

DateTime.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
