import IconChevronRight from "icons/IconChevronRight";
import IconChevronLeft from "icons/IconChevronLeft";
import Button from "./Button";
import styles from "./styles.module.css";

export type PaginationProps = {
  page: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSetPage: (page: number) => void;
};

export default function Pagination({
  page,
  hasNext,
  hasPrevious,
  onPrevious,
  onNext,
  onSetPage,
}: PaginationProps) {
  const bttns = getBttnsRange(page);

  return (
    <div className={styles.container}>
      <Button disabled={!hasPrevious} onClick={onPrevious}>
        <IconChevronLeft color={hasPrevious ? "#025B4B" : "#737680"} size={20} />
      </Button>

      <div className={styles.bttnGroup}>
        {bttns.map((value) => (
          <Button
            key={value}
            active={page === value}
            disabled={!hasNext}
            onClick={() => onSetPage(value)}
          >
            {value}
          </Button>
        ))}
      </div>

      <Button onClick={onNext}>
        <IconChevronRight color={hasNext ? "#025B4B" : "#737680"} size={20} />
      </Button>
    </div>
  );
}
function getBttnsRange(page: number): number[] {
  let end = page;

  while (end % 4 !== 0) {
    end++;
  }

  const start = Math.max(end - 3, 1);
  return Array.from({ length: 4 }, (_, i) => start + i);
}
