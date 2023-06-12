import { InputHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCva } from "./../../../cva/input";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputCva> {
    /** Input ColorScheme.*/
    colorScheme?: "default" | "success" | "error";

    /** Helper text. */
    helperText?: string;

    /** Input Bottom Line.*/
    hasBottomLine?: boolean;

    /** Input Width.*/
    w?: "default" | "auto" | "full";
    /** Represent value is loading.*/
    loading?: boolean;
}