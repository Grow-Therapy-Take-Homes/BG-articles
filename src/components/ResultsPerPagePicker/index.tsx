import { useState } from "react";
import IconMenu from "icons/IconMenu";
import MenuButton from "@components/MenuButton";
import cn from "@utils/cn";
import styles from "./styles.module.css";

const values = [25, 50, 75, 100, 200];

export type ResultsPerPagePickerProps = {
  selectedValue: number;
  onSelect(value: number): void;
};

export default function ResultsPerPagePicker({
  selectedValue,
  onSelect,
}: ResultsPerPagePickerProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getValueHandler = (value: number) => () => {
    onSelect(value);
    handleClose();
  };

  return (
    <MenuButton
      data-testid="results-per-page-picker"
      icon={<IconMenu />}
      label="NUM RESULTS"
      open={open}
      selectedValue={selectedValue}
      onClick={handleClick}
      onClose={handleClose}
    >
      <div className={styles.menu}>
        {values.map((value) => (
          <button
            key={value}
            aria-selected={selectedValue === value}
            className={cn(styles.bttn, selectedValue === value && styles.bttn_selected)}
            data-testid={`results-per-page-option-${value}`}
            type="button"
            value={value}
            onClick={getValueHandler(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </MenuButton>
  );
}
