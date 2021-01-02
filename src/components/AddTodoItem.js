import { React } from 'react';
import './AddTodoItem.css';

export const AddTodoItem = ({ id, description, due_date, note, created_at, update_at }) => {
  const addNewItem = (e) => {
    e.preventDefault();
    console.log('Add New Item');
  };

  return (
    <form className="add-item-form" onSubmit={addNewItem}>
      <input
        className="item-description-input"
        type="text"
      />
    </form>
  );
}
