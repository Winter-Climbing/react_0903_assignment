import { type ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  bgColor?: string;
  fgColor?: string;
  width?: string;
};

const Button = ({
  type = "button",
  variant = "primary",
  bgColor,
  fgColor,
  width,
  className = "",
  style = {},
  ...restProps
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  const combinedStyle = {
    backgroundColor: bgColor,
    color: fgColor,
    width,
    ...style,
  };

  return (
    <button
      className={buttonClass}
      type={type}
      style={combinedStyle}
      {...restProps}
    />
  );
};

export default Button;
