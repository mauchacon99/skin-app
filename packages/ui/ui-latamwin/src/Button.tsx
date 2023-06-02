import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /** ClassName. */
  className: string;
}

/**
 * Button.
 *
 * @param props - ButtonProps.
 * @returns JSX.Element.
 */
export const Button = (props: ButtonProps) => {
  const { className } = props;

  return (
    <button className={className} onClick={() => alert("boop")}>
      Boop
    </button>
  );
};