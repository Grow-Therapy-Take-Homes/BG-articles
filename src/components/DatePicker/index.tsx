import { formatDate } from "@utils/date";
import MenuButton from "@components/MenuButton";
import IconCalendar from "icons/IconCalendar";
import useCalendar from "@hooks/useCalendar";
import Calendar from "./Calendar";

export type DatePickerProps = {
  from?: Date;
  to?: Date;
  defaultDate: Date;
  onSelect: (date: Date) => void;
};

export default function DatePicker({ defaultDate, from, to, onSelect }: DatePickerProps) {
  const calendar = useCalendar(defaultDate);

  const handleSelectDay = (day: Date) => {
    calendar.onSelect(day);
    onSelect(day);
  };

  return (
    <MenuButton icon={<IconCalendar />} label="Date" selected={formatDate(calendar.selected)}>
      <Calendar {...calendar} from={from} to={to} onSelect={handleSelectDay} />
    </MenuButton>
  );
}
