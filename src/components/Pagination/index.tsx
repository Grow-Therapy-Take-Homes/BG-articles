import IconChevronRight from "icons/IconChevronRight";
import IconChevronLeft from "icons/IconChevronLeft";
import Button from "./Button";
import styles from "./styles.module.css";
import { getBttnsRange } from "./helpers";

export type PaginationProps = {
  total: number;
  page: number;
  lastPage: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSetPage: (page: number) => void;
};

export default function Pagination({
  total,
  page,
  lastPage,
  hasNext,
  hasPrevious,
  onPrevious,
  onNext,
  onSetPage,
}: PaginationProps) {
  const bttns = getBttnsRange(page);

  return (
    <div className={styles.container}>
      <Button data-testid="previous-page" disabled={!hasPrevious} onClick={onPrevious}>
        <IconChevronLeft color={hasPrevious ? "#025B4B" : "#737680"} size={20} />
      </Button>

      <div className={styles.bttnGroup}>
        {bttns.map((value) => (
          <Button
            key={value}
            active={!!total && page === value}
            data-testid={`page-${value}`}
            disabled={!total || value > lastPage}
            onClick={() => onSetPage(value)}
          >
            {value}
          </Button>
        ))}
      </div>

      <Button data-testid="next-page" disabled={!hasNext} onClick={onNext}>
        <IconChevronRight color={hasNext ? "#025B4B" : "#737680"} size={20} />
      </Button>
    </div>
  );
}
