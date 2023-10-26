import { useMemo, useState } from "react";

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export type UseCalendarDay = {
  disabled: boolean;
  date: Date;
};

export type UseCalendarResponse = {
  selected: Date;
  date: Date;
  days: UseCalendarDay[];
  weekdays: string[];
  previous: () => void;
  next: () => void;
  reset: () => void;
  onSelect: (day: Date) => void;
};

export default function useCalendar(defaultDate: Date): UseCalendarResponse {
  const [date, setDate] = useState(defaultDate);
  const [selected, setSelected] = useState(defaultDate);

  const previous = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const reset = () => {
    setDate(new Date());
  };

  const next = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const onSelect = (day: Date) => {
    setDate(day);
    setSelected(day);
  };

  const days = useMemo(() => {
    const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const prevMonth = Array.from({ length: firstDayOfMonth.getDay() }, (_, i) => ({
      disabled: true,
      date: new Date(
        lastDayOfPrevMonth.getFullYear(),
        lastDayOfPrevMonth.getMonth(),
        lastDayOfPrevMonth.getDate() - i,
      ),
    })).reverse();

    const currentMonth = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => ({
      disabled: false,
      date: new Date(date.getFullYear(), date.getMonth(), i + 1),
    }));

    const nextMonth = Array.from(
      { length: 42 - currentMonth.length - prevMonth.length },
      (_, i) => ({
        disabled: true,
        date: new Date(date.getFullYear(), date.getMonth() + 1, i + 1),
      }),
    );

    return prevMonth.concat(currentMonth).concat(nextMonth);
  }, [date]);

  return { selected, date, days, weekdays, previous, next, reset, onSelect };
}
