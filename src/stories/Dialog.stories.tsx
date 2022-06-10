import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dialog from "../lib/dialog";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dialog",
  component: Dialog,
  actions: { argTypesRegex: "^on.*" },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // visible: true,
    onOk: { action: "clicked" },
  },
  args: {
    visible: true,
    onOk: () => {
      console.log("ok");
    },
    onCancel: () => {
      console.log("cancel");
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;
export const Primary = Template.bind({});
