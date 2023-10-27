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
  const getHandleClick = (value: number) => () => {
    onSelect(value);
  };

  return (
    <MenuButton icon={<IconMenu />} label="NUM RESULTS" selectedValue={selectedValue}>
      <div className={styles.menu}>
        {values.map((value) => (
          <button
            key={value}
            className={cn(styles.bttn, selectedValue === value && styles.bttn_selected)}
            type="button"
            value={value}
            onClick={getHandleClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </MenuButton>
  );
}
