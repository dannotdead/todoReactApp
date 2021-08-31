import React, {useContext, useState} from 'react';
import ControlledButton from "./UI/button/ControlledButton";
import {AuthContext} from "../context";

const CheckAllTodos = () => {
  const [checkAllTodos, setCheckAllTodos] = useState(false)
  const {todos, setTodos} = useContext(AuthContext)

  const checkAllToDos = () => {
    let todosCopy = [...todos]
    if (checkAllTodos) {
      todosCopy.map(item => {
          item.checked = false
        }
      )
      setCheckAllTodos(false)
    } else {
      todosCopy.map(item => {
          if (!item.checked) item.checked = true
        }
      )
      setCheckAllTodos(true)
    }
    setTodos(todosCopy)
  }

  return (
    <ControlledButton onClick={checkAllToDos}>CheckAll</ControlledButton>
  );
};

export default CheckAllTodos;