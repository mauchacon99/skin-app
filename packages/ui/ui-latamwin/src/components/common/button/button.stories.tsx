import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonProps } from "./button.interface";
import Button from "./button";

const StoryBookComponent = {
    title: "ElEMENTS/Button",
    component: Button,
} as Meta<ButtonProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ButtonProps> = (props: ButtonProps) => {
    return <Button {...props} />;
};

const argTypes: Partial<ArgTypes<ButtonProps>> = {
    intent: {
        options: ["primary", "secondary"],
        control: { type: "radio" },
        description: "Este es el button principal",
    },
    variant: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
    },
    shadow: {
        defaultValue: "none",
        options: ["none", "sm", "md", "lg", "xl"],
        control: { type: "radio" },
    },
    disabled: { type: "boolean" },
};

export const Primary = Template.bind({});

Primary.argTypes = argTypes;
Primary.args = {
    intent: "primary",
    variant: "contained",
};
export const Secondary = Template.bind({});
Secondary.args = {
    intent: "secondary",
    variant: "contained",
};

Secondary.argTypes = argTypes;

export default StoryBookComponent;