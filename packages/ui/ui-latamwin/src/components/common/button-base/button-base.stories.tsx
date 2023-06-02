import React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ButtonBaseProps } from "./button-base.interface";

import ButtonBase from "./button-base";

const StoryBookComponent = {
    title: "UI-LATAMWIN/ButtonBase",
    component: ButtonBase,
} as Meta<ButtonBaseProps>;

/**
 * Template.
 *
 * @param props Props this component.
 * @returns JSX.Element.
 */
const Template: StoryFn<ButtonBaseProps> = (props) => {
    return <ButtonBase {...props} />;
};

const argTypes: Partial<ArgTypes<ButtonBaseProps>> = {
    intent: {
        options: ["primary", "secondary"],
        control: { type: "radio" },
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
        options: ["sm", "md", "lg", "xl"],
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

Secondary.argTypes = argTypes;

export default StoryBookComponent;