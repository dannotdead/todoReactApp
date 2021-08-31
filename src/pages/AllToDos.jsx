import React, {useContext, useState} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {AuthContext} from "../context";

const AllToDos = () => {
  const {todos, createTodo, changeCheck, deleteToDo} = useContext(AuthContext)

  return (
    <div className='App'>
      <TodoForm create={createTodo}/>
      <TodoList todos={todos} changeCheck={changeCheck} deleteToDo={deleteToDo}/>
    </div>
  );
};

export default AllToDos;