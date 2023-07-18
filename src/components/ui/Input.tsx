import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <label
        htmlFor={props.id}
        className={twMerge(
          `
          block absolute left-0 text-xs bottom-2 
          text-orange-800 transition-all delay-75 
          duration-150
          `,
          focused || props.value !== "" ? "opacity-0" : "opacity-100"
        )}
      >
        {props.name}
      </label>

      <input
        type={type}
        className={twMerge(
          `
          flex w-full bg-transparent border-b border-orange-800 
          pb-2 text-xs placeholder:text-orange-400 text-orange-800 
          disabled:cursor-not-allowed disabled:opacity-50 
          focus:outline-none autofill:bg-transparent
        `,
          disabled && "opacity-75",
          className
        )}
        disabled={disabled}
        ref={ref}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </div>
  )
});

Input.displayName = "Input";

export default Input;
