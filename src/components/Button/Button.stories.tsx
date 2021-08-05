import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { CISButton, CISButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: CISButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CISButtonProps> = (args) => <CISButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "CISButton", size: "default" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: 'secondary', label: "Secondary" };

export const Warning = Template.bind({});
Warning.args = { ...Primary.args, type: 'warning', label: "Warning" };