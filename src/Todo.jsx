import { Button, Checkbox, Flex } from "@chakra-ui/react";
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

  console.log("isediting", isEditing);

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
        <Flex alignItems="center" ml="24px" gap="12px">
          <Checkbox
            onClick={() => toggleCompleted(id)}
            colorScheme="orange"
            size="lg"
          >
            {task}
          </Checkbox>
          <Button
            onClick={() => {
              removeTodo(id);
            }}
            colorScheme="red"
            variant="ghost"
          >
            Delete
          </Button>
          <Button
            onClick={toggleEditing}
            colorScheme="whatsapp"
            variant="ghost"
          >
            Edit
          </Button>
        </Flex>
      )}
    </div>
  );
}
