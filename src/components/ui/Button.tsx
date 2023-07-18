import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
        w-full rounded-md border border-transparent 
        px-2 py-4 disabled:cursor-not-allowed disabled:opacity-50 
        text-orange-400 font-bold transition delay-75 duration-150 
        bg-orange-700 hover:bg-orange-800
      `,
        disabled && "opacity-75 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
