import { React } from 'react';
import './TodoList.css';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todoListItems, ...props }) => {
  return (
    <ul>
      {
        todoListItems.length >0  && todoListItems.map(todoItem => (
          <TodoListItem key={todoItem.id} {...todoItem} />
        ))
      }
    </ul>
  );
}
