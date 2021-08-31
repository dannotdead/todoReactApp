import React, {useState} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
  const [todos, setTodos] = useState([])

  // убрать изменение состояния при каждом изменении input, useMemo
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const changeCheck = (todo) => {
    let todosCopy = [...todos]
    todosCopy.map(item => {
        if (item.id === todo) {
          item.checked ? item.checked = false : item.checked = true
        }
      }
    )
    setTodos(todosCopy)
  }

  const deleteToDo = (todo) => {
    setTodos(todos.filter(item => item.id !== todo))
  }

  return (
    <AuthContext.Provider
      value={{
        todos,
        setTodos,
        createTodo,
        changeCheck,
        deleteToDo
      }}
    >
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
