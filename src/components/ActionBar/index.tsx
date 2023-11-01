import type { FormEvent } from "react";
import { useState } from "react";
import DatePicker from "@components/DatePicker";
import ResultsPerPagePicker from "@components/ResultsPerPagePicker";
import { useAppStore } from "store";
import Button from "@components/Button";
import styles from "./styles.module.css";
import Divider from "./Divider";

export default function ActionBar() {
  const defaultDate = useAppStore((s) => s.date);
  const defaultLimit = useAppStore((s) => s.limit);
  const applyDate = useAppStore((s) => s.setDate);
  const applyLimit = useAppStore((s) => s.setLimit);
  const [date, setDate] = useState(defaultDate);
  const [limit, setLimit] = useState(defaultLimit);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyDate(date);
    applyLimit(limit);
  };

  return (
    <form className={styles.actionbar} onSubmit={handleSubmit}>
      <DatePicker defaultDate={date} to={new Date()} onSelect={setDate} />

      <Divider />
      <ResultsPerPagePicker selectedValue={limit} onSelect={setLimit} />

      <Button className={styles.bttn} data-testid="search-button" type="submit">
        Search
      </Button>
    </form>
  );
}
