import React from 'react';

import { TodoListItem } from '../components/TodoListItem';

export default {
  title: 'Components/TodoListItem',
  component: TodoListItem
};

const Template = (args) => (<ul><TodoListItem {...args} /></ul>);

export const CompleteItem = Template.bind({});
CompleteItem.args = {
  id: "c84e1844-1d83-48e0-9421-050065a03394",
  description: "Clean-up vacuum",
  note: "Remember to do that before 11:30am",
  due_date: "2020-12-29 01:46:43",
  created_at: "2020-12-28 01:46:43",
  updated_at: "2020-12-28 01:46:43"
};
