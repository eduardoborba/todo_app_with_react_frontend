import React from 'react';

import { TodoList } from '../components/TodoList';

export default {
  title: 'Components/TodoList',
  component: TodoList
};

const Template = (args) => <TodoList {...args} />;

export const TodoListTemplate = Template.bind({});
TodoListTemplate.args = {
  todoListItems: [
    {
      id: "c84e1844-1d83-48e0-9421-050065a03394",
      description: "Clean-up vacuum",
      due_date: "2020-12-29 01:46:43",
      created_at: "2020-12-28 01:46:43",
      updated_at: "2020-12-28 01:46:43"
    },
    {
      id: "eaa01437-d895-4424-b99b-de538439b396",
      description: "Update Resume",
      note: "Follow this tips: https://www.batatolandia.de/blog/estudo-carreira/como-preparar-curriculo-e-carta-de-apresentacao-na-alemanha#canal-alemanizando",
      created_at: "2020-12-28T01:47:01.285Z",
      updated_at: "2020-12-28T01:47:01.285Z"
    }
  ],
};
