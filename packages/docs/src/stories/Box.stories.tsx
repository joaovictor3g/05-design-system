import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<BoxProps>;

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObjProps = {
  args: {},
};
