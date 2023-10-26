import type { ReactNode } from "react";
import { useState } from "react";
import IconChevronDown from "icons/IconChevronDown";
import useOnClickOutside from "@hooks/useClickOutside";
import cn from "@utils/cn";
import styles from "./styles.module.css";

export type MenuButtonProps = {
  label: string;
  selected: number | string;
  children: NonNullable<ReactNode>;
  icon: NonNullable<ReactNode>;
};

export default function MenuButton({ label, selected, children, icon }: MenuButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useOnClickOutside<HTMLDivElement>(() => setOpen(false));

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div ref={ref} className={styles.container}>
      <button
        className={cn(styles.bttn, open && styles.bttn_active)}
        id="menuButton"
        onClick={handleClick}
      >
        {icon}
        <div className={styles.textContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="menuButton">
              {label}
            </label>
            <IconChevronDown color="#A7AAAB" flipVertical={open} />
          </div>
          <div className={styles.selectedDate}>{selected}</div>
        </div>
      </button>
      {open && <div className={styles.menu}>{children}</div>}
    </div>
  );
}
