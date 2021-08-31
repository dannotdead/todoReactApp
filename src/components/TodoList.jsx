import React, {useContext} from 'react';
import TodoItem from "./TodoItem";
import {AuthContext} from "../context";
import ButtonGroup from "./ButtonGroup";

const TodoList = ({todos}) => {
  const {changeCheck, deleteToDo} = useContext(AuthContext)

  return (
    todos && todos.length
    ?
    <div>
      {todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} changeCheck={changeCheck} deleteToDo={deleteToDo}/>
      )}
      <ButtonGroup/>
    </div>
    :
      <ButtonGroup/>
  );
};

export default TodoList;