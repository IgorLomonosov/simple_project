import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Натисни мене",
  color: "blue",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Видалити",
  color: "red",
};
