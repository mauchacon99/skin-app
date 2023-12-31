import { cva } from "class-variance-authority";

const classNameDefault = ["relative", "overflow-hidden", "rounded-xl"];

export const inputWidthCva = cva(classNameDefault, {
    variants: {
        w: {
            default: "w-[353px]",
            auto: "w-fit",
            full: "w-full",
        },
    },
});
