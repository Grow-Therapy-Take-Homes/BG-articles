import IconMenu from "icons/IconMenu";
import MenuButton from "@components/MenuButton";
import cn from "@utils/cn";
import styles from "./styles.module.css";

const values = [25, 50, 75, 100, 200];

export type ResultsPerPagePickerProps = {
  selected: number;
  onSelect(value: number): void;
};

export default function ResultsPerPagePicker({ selected, onSelect }: ResultsPerPagePickerProps) {
  const getHandleClick = (value: number) => () => {
    onSelect(value);
  };

  return (
    <MenuButton icon={<IconMenu />} label="NUM RESULTS" selected={selected}>
      <div className={styles.menu}>
        {values.map((value) => (
          <button
            key={value}
            className={cn(styles.bttn, selected === value && styles.bttn_selected)}
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
