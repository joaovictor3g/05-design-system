import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<ButtonProps>;

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

export const Primary: StoryObjProps = {
  args: {
    children: "Enviar",
  },
};

export const Big: StoryObjProps = {
  args: {
    size: "big",
  },
};
