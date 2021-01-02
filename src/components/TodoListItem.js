import { React } from 'react';
import './TodoListItem.css';

export const TodoListItem = ({ id, description, due_date, note, created_at, update_at }) => {
  const markComplete = (e) => {
    e.preventDefault();
    debugger;
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={false}
        onChange={markComplete}
        className="mark-complete"
      />
      <span className="item-description">{description}</span>
    </li>
  );
}
