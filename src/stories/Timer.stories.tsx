// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Timer from "../components/timer";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Timer",
  component: Timer,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
        <p style={{ padding: "2px", width: "100%", textAlign: "center" }}>
          You can halt, resume and restart (at 0 sec) on clicking this button
        </p>
      </div>
    ),
  ],
} as ComponentMeta<typeof Timer>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const BasicTimer = Template.bind({});

BasicTimer.args = {
  duration: 0,
  /*👇 The args you need here will depend on your component */
};
