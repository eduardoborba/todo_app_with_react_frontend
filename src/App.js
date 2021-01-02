import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { TodoList } from './components/TodoList';
import { AddTodoItem } from './components/AddTodoItem';
import { Header } from './components/Header';

function App() {
  const [todoListItems, setTodoListItems] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/todos')
      .then((response) => {
        setTodoListItems(response.data);
      });
  }, []);

  return (
    <div className="main-app">
      <Header />
      <div className="main-content">
        <TodoList todoListItems={todoListItems} />
        <AddTodoItem />
      </div>
    </div>
  );
}

export default App;
