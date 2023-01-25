import { Box } from "@chakra-ui/react";
import React from "react";
import { Todo } from "./Todo";

export function TodoList({ todos, toggleCompleted, removeTodo, editTodo }) {
  console.log("todos", todos);

  return (
    <Box as="ul" mt="50px">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        </li>
      ))}
    </Box>
  );
}
