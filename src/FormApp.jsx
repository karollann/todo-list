import React from "react";
import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

import { Center, Flex } from "@chakra-ui/react";

export function FormApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleCompleted = (Id) => {
    const toggledCompleted = todos.map((todo) =>
      todo.id === Id ? { ...todo, completed: !todo.completed } : todo
    );
    return setTodos(toggledCompleted);
  };

  const removeTodo = (Id) => {
    const updateTodos = todos.filter((todo) => todo.id !== Id);
    setTodos(updateTodos);
  };

  const addTodo = (newTask) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: newTask,
        completed: false,
      },
    ]);
  };

  const editTodo = (Id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === Id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Flex direction="column" minW="100%" minH="100%">
      <Center
        as="header"
        bg="blue.500"
        h="100px"
        color="white"
        fontWeight="bold"
        fontSize="3xl"
      >
        This is your Todo list!
      </Center>
      <Flex
        as="main"
        minW="100%"
        minH="100%"
        flex="1"
        flexDirection="column"
        alignItems="center"
        pt="100px"
      >
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </Flex>
    </Flex>
  );
}
