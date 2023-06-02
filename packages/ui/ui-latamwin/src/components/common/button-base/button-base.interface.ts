import { ButtonHTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonCva } from "../../cva/button-base-cva";

export interface ButtonBaseProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonCva> {
    /** This text button. */
    label: string;
    /** Represent value is loading.*/
    loading?: boolean;
}