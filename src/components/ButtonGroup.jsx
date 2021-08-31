import React, {useContext} from 'react';
import ControlledButton from "./UI/button/ControlledButton";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context";
import classes from "../styles/buttonGroup.module.css";

const ButtonGroup = () => {
  const history = useHistory()
  const {todos, setTodos} = useContext(AuthContext)
  let completedFlag = todos.some(item => item.checked)
  let todosLength = 0

  todos.forEach(item => {
    if (!item.checked) todosLength++
  })

  const showCompletedToDos = () => {
    history.push('/completed')
  }

  const showActiveToDos = () => {
    history.push('/active')
  }

  const showAllToDos = () => {
    history.push('/all')
  }

  const clearCompletedToDos = () => {
    setTodos(todos.filter(item => !item.checked))
  }

  return (
    <div className={classes.group}>
      <h4>{todosLength} items left</h4>
      <ControlledButton onClick={showAllToDos}>All</ControlledButton>
      <ControlledButton onClick={showActiveToDos}>Active</ControlledButton>
      <ControlledButton onClick={showCompletedToDos}>Completed</ControlledButton>
      {completedFlag && <ControlledButton onClick={clearCompletedToDos}>Clear Completed</ControlledButton>}
    </div>
  );
};

export default ButtonGroup;