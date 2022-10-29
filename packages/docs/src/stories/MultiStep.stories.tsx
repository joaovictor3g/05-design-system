import type { Meta, StoryObj } from "@storybook/react";
import { Box, MultiStep, MultiStepProps } from "@joaovictor3g/react";

export type StoryObjProps = StoryObj<MultiStepProps>;

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObjProps = {
  args: {},
};

export const Full: StoryObjProps = {
  args: {
    currentStep: 4,
  },
};
