import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [ todos, setTodos ] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning styling in React!", isCompleted: false },
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompleted: false }]; // ...todos update terbaru todos

    if (value.length > 10) {
      alert("Only 10 todos is allowed!");
      addedTodo("");
      return;
    }

    setTodos(addedTodo);
  }
  
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo)
  }
  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
        <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos} />

        <TodoForm addTodo={addTodo} showAdd={showAdd} />

        <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;