import React from 'react';
import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
  return (
    <input className={classes.todoInput} {...props}/>
  );
};

export default TodoInput;