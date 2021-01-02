import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { TodoList } from './components/TodoList';

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
      <TodoList todoListItems={todoListItems} />
    </div>
  );
}

export default App;
