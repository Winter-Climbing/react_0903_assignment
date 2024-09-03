import { type ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const Input = ({
  label,
  placeholder = "",
  type = "text",
  name,
  className = "",
  value,
  onChange,
  onKeyDown,
  ...restProps
}: InputProps) => {
  const inputClass = `${styles} ${className}`;

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={inputClass}
        {...restProps}
      />
    </div>
  );
};

export default Input;
