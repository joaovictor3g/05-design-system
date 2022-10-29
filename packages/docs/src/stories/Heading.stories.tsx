import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<HeadingProps>;

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Example heading",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObjProps = {
  args: {},
};

export const CustomTag: StoryObjProps = {
  args: {
    children: "H1 heading",
    as: "h1",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Por padrao o heading sempre sera um `h2`, mas isso pode ser alterado com a propriedade `as`",
      },
    },
  },
};
