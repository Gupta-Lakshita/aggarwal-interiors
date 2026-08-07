import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-espresso-950 text-ivory-100 hover:bg-terracotta-600 focus-visible:outline-terracotta-500",
  secondary:
    "bg-terracotta-500 text-white hover:bg-terracotta-600 focus-visible:outline-terracotta-600",
  outline:
    "border border-espresso-950/30 text-espresso-950 hover:border-espresso-950 hover:bg-espresso-950/5",
  ghost: "text-espresso-950 hover:bg-espresso-950/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
