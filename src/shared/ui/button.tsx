import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "outline";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClasses =
  "inline-flex h-[61px] w-[144px] items-center justify-center gap-[10px] rounded-[20px] text-sm font-semibold transition";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-warning-500 text-white shadow-sm hover:bg-warning-600 active:bg-warning-600",
  outline:
    "border border-warning-500 bg-white text-warning-600 hover:bg-warning-50 active:bg-warning-50",
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type"> & {
    as?: "button";
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  if (props.as === "a") {
    const {
      children,
      variant = "primary",
      className,
      as,
      ...rest
    } = props;
    const classes = cn(baseClasses, variantClasses[variant], className);
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const {
    children,
    variant = "primary",
    className,
    as,
    type = "button",
    ...rest
  } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}