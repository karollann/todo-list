import React from "react";
import { useState } from "react";
import { EditTodo } from "./EditTodo";

export function Todo({
  id,
  task,
  completed,
  toggleCompleted,
  removeTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <EditTodo
          id={id}
          task={task}
          editTodo={editTodo}
          changeIsEditing={toggleEditing}
        />
      ) : (
        <div>
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={() => toggleCompleted(id)}
          />
          <span>{task}</span>
          <button
            onClick={() => {
              removeTodo(id);
            }}
          >
            Delete
          </button>
          <button onClick={toggleEditing}>Edit</button>
        </div>
      )}
    </div>
  );
}
