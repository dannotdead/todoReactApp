import React from 'react';
import classes from '../styles/TodoItem.module.css'
import ControlledButton from "./UI/button/ControlledButton";

const TodoItem = ({todo, changeCheck, deleteToDo}) => {

  const bodyStyle = [classes.body, classes.bodyLineThrough]
  // const [inputTodo, setInputTodo] = useState(todo.body)
  //
  // const changeTodoOnDoubleClick = () => {
  //
  // }

  return (
    <div className={classes.item}>
      <ControlledButton onClick={() => changeCheck(todo.id)}>Check</ControlledButton>
      <div
        className={todo.checked ? bodyStyle.join(' ') : classes.body}
      >{todo.body}</div>
      <ControlledButton onClick={() => deleteToDo(todo.id)}>Delete</ControlledButton>
    </div>
  );
};

export default TodoItem;