import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button" }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
    w-full
    rounded-full
    bg-green-500
    border-transparent
    px-3
    py-3
    disabled:opacity-50
    disabled:cursor-not-allowed
    text-black
    font-bold
    hover:bg-green-400
    transition
    `,
          className
        )}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
