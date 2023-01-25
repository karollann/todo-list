import { Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        value && addTodo(value);
        reset();
      }}
    >
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Your Todo"
        variant="outline"
        bgColor="white"
        focusBorderColor="red.300"
      />
    </form>
  );
}
