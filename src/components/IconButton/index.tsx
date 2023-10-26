import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: number;
  children: NonNullable<ReactNode>;
};

export default function IconButton({ children, size = 28, ...props }: IconButtonProps) {
  return (
    <button
      className={styles.bttn}
      style={{ width: size, height: size, lineHeight: size }}
      {...props}
    >
      {children}
    </button>
  );
}
