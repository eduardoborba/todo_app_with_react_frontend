import { React, useEffect, useState } from 'react';
import axios from 'axios';

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios('http://localhost:3000/todos')
      .then((response) => {
        console.log(response);
        setTodoList(response.data);
      });
  }, []);

  return (
    <ul>
      {
        todoList.length > 0 && todoList.map(todo => (
          <li key={todo.id}>{todo.description}</li>
        ))
      }
    </ul>
  );
}

export default TodoList;
