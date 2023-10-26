import IconChevronLeft from "icons/IconChevronLeft";
import IconChevronRight from "icons/IconChevronRight";
import IconButton from "@components/IconButton";
import cn from "@utils/cn";
import type { UseCalendarResponse } from "@hooks/useCalendar";
import styles from "./styles.module.css";

export type CalendarProps = UseCalendarResponse & {
  from?: Date;
  to?: Date;
};

export default function Calendar({
  date,
  selected,
  days,
  weekdays,
  from,
  to,
  previous,
  next,
  onSelect,
}: CalendarProps) {
  const month = date.toLocaleString("default", { month: "long" });

  const handleSelectDay = (day: Date) => () => {
    onSelect(day);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <IconButton onClick={previous}>
          <IconChevronLeft size={24} />
        </IconButton>

        <div className={styles.title}>
          {month} {date.getFullYear()}
        </div>

        <IconButton onClick={next}>
          <IconChevronRight size={24} />
        </IconButton>
      </div>

      <div className={styles.days}>
        {weekdays.map((day) => (
          <div key={day} className={styles.day}>
            <span className={cn(styles.date, styles.day_disabled)}>{day}</span>
          </div>
        ))}
        {days.map((day) => (
          <div key={day.date.getTime()} className={styles.day} onClick={handleSelectDay(day.date)}>
            <button
              className={cn(
                styles.date,
                day.date.getTime() === selected.getTime() && styles.date_selected,
              )}
              disabled={day.disabled || (from && day.date < from) || (to && day.date > to)}
            >
              {day.date.getDate()}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
