import IconChevronRight from "icons/IconChevronRight";
import IconChevronLeft from "icons/IconChevronLeft";
import Button from "./Button";
import styles from "./styles.module.css";

export type PaginationProps = {
  page: number;
  limit: number;
  active: number;
  range: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSetPage: (page: number) => void;
};

export default function Pagination({
  active,
  range,
  hasNext,
  hasPrevious,
  onPrevious,
  onNext,
  onSetPage,
}: PaginationProps) {
  const bttns = new Array(range).fill(0).map((_, i) => i + 1);

  return (
    <div className={styles.container}>
      <Button disabled={!hasPrevious} onClick={onPrevious}>
        <IconChevronLeft color="#025B4B" size={20} />
      </Button>

      <div className={styles.bttnGroup}>
        {bttns.map((value) => (
          <Button
            key={value}
            active={active === value}
            disabled={!hasNext}
            onClick={() => onSetPage(value)}
          >
            {value}
          </Button>
        ))}
      </div>

      <Button onClick={onNext}>
        <IconChevronRight color="#025B4B" size={20} />
      </Button>
    </div>
  );
}
