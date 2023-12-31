import { cva } from "class-variance-authority";

const classNameDefault = [
    "bg-primary-50",
    "flex",
    "items-center",
    "justify-center",
    "w-[68px]",
    "h-[68px]",
    "rounded-full",
];

export const socialIconBoxCva = cva(classNameDefault);
