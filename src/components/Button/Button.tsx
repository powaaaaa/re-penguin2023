import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "contained" | "outlined";
  size?: "large" | "medium" | "small";
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<Props> = ({ children, variant, size, ...props }) => {
  const style = cva(`rounded ${props.className}`, {
    variants: {
      variant: {
        contained:
          "bg-[#8FD0D0] hover:bg-[#aaddcc] hover:border hover:border-[#637491]",
        outlined: "border-[#aaddcc] hover:bg-[#bddded] hover:border-[#637491]",
      },
      size: {
        large: "py-3 px-8 border-4 text-xl font-bold",
        medium: "py-1 px-6 border-2 text-base font-medium",
        small: "py-1 px-3 text-xs font-medium",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "medium",
    },
  });

  return (
    <button className={style({ variant, size })} {...props}>
      {children}
    </button>
  );
};
