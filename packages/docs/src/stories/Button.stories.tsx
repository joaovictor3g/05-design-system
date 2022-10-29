import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@joaovictor3g/react";

import { ArrowRight } from "phosphor-react";

export type StoryObjProps = StoryObj<ButtonProps>;

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObjProps = {};

export const Secondary: StoryObjProps = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObjProps = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObjProps = {
  args: {
    size: "sm",
  },
};

export const Disabled: StoryObjProps = {
  args: {
    disabled: true,
  },
};

export const WithIcon: StoryObjProps = {
  args: {
    children: (
      <>
        Next steps
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
