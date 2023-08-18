import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import ToDoList from "./TodoList.js";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task: todo,
        isCompleted: false,
        isDeleted: false,
      },
    ]);
  };

  useEffect(() => {
    console.log("todos are ", todos);
  }, [todos]);

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <>

      <div className="TodoWrapper" style={{ paddingTop: "80px" }}>
        <ToDoList style={{ paddingBottom: "100px" }} />
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
          <Todo
            props={todo}
            key={todo.id}
            deleteTask={deleteTask}
            markDone={markDone}
          />
        ))}
      </div>
    </>
  );
};
