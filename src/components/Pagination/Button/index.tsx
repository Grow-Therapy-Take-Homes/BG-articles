import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "@utils/cn";
import styles from "./styles.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  children: NonNullable<ReactNode>;
};

export default function Button({ active, children, ...props }: ButtonProps) {
  return (
    <button className={cn(styles.bttn, active && styles.bttn_active)} type="button" {...props}>
      {children}
    </button>
  );
}
