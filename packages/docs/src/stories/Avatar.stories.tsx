import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<AvatarProps>;

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/joaovictor3g.png",
    alt: "Joao Victor",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObjProps = {};

export const WithFallback: StoryObjProps = {
  args: {
    src: undefined,
  },
};
