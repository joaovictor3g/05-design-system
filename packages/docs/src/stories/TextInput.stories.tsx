import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<TextInputProps>;

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObjProps = {
  args: {
    placeholder: "Type your name",
  },
};

export const WithPrefix: StoryObjProps = {
  args: {
    prefix: "call.com",
  },
};

export const Disabled: StoryObjProps = {
  args: {
    disabled: true,
  },
};
