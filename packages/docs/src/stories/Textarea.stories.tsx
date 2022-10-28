import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, Textarea, TextareaProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<TextareaProps>;

export default {
  title: "Form/Text Area",
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextareaProps>;

export const Primary: StoryObjProps = {
  args: {
    placeholder: "Add any observations",
  },
};

export const Disabled: StoryObjProps = {
  args: {
    disabled: true,
  },
};
