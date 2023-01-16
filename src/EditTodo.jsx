import React from "react";
import { useState } from "react";

export function EditTodo({ id, task, editTodo, changeIsEditing }) {
  const [value, setValue] = useState(task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        changeIsEditing();
      }}
    >
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}
