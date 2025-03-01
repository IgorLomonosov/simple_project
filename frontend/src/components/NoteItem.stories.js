import React from "react";
import NoteItem from "./NoteItem";

export default {
  title: "Components/NoteItem",
  component: NoteItem,
};

const Template = (args) => <NoteItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Моя нотатка",
  content: "Це приклад тексту нотатки.",
};

export const LongText = Template.bind({});
LongText.args = {
  title: "Довга нотатка",
  content: "Це довгий текст нотатки, який містить багато слів і займає кілька рядків...",
};
