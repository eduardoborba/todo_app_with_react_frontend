import { React, useState } from 'react';
import axios from 'axios';
import './AddTodoItem.css';

export const AddTodoItem = () => {
  const [itemDescription, setItemDescription] = useState('');

  const addNewItem = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/todos', {
      description: itemDescription
    }).then((response) => {
      setItemDescription('');
    });

  };

  return (
    <form className="add-item-form" onSubmit={addNewItem}>
      <input
        className="item-description-input"
        type="text"
        placeholder="Add a Task"
        value={itemDescription}
        onChange={e => setItemDescription(e.target.value)}
      />
    </form>
  );
}
