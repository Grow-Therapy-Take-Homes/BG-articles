import type { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

export default function SearchButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.bttn} type="submit" {...props}>
      Search
    </button>
  );
}
