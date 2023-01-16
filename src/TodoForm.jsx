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
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}
