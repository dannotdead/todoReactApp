import React, {useContext} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {AuthContext} from "../context";

const ActiveToDos = () => {
  const {todos, createTodo, changeCheck, deleteToDo} = useContext(AuthContext)
  const activeTodos = todos.filter(item => !item.checked)

  return (
    <div className='App'>
      <TodoForm create={createTodo}/>
      <TodoList todos={activeTodos} changeCheck={changeCheck} deleteToDo={deleteToDo}/>
    </div>
  );
};

export default ActiveToDos;