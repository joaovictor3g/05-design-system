import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<TextProps>;

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Example Text",
  },
} as Meta<TextProps>;

export const Primary: StoryObjProps = {
  args: {},
};

export const CustomTag: StoryObjProps = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
