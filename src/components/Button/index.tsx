import type { ButtonHTMLAttributes } from "react";
import cn from "@utils/cn";
import styles from "./styles.module.css";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(styles.bttn, className)} type="button" {...props}>
      {children}
    </button>
  );
}
