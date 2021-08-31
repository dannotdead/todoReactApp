import React, {useState} from 'react';
import TodoInput from "./UI/input/TodoInput";
import CheckAllTodos from "./CheckAllTodos";
import classes from '../styles/todoForm.module.css'

const TodoForm = ({create}) => {
  const [inputTodo, setInputTodo] = useState('')

  const submitTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      id: Date.now(),
      body: inputTodo,
      checked: false
    }
    create(newTodo)
    setInputTodo('')
  }

  return (
    <div className={classes.main}>
      <h1 className={classes.h1}>todos</h1>
      <CheckAllTodos />
      <form onSubmit={submitTodo}>
        <TodoInput
          className={classes.input}
          value={inputTodo}
          type="text"
          onChange={(event) => setInputTodo(event.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;