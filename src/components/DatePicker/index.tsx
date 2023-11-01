import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const calendar = useCalendar(defaultDate);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectDay = (day: Date) => {
    calendar.onSelect(day);
    onSelect(day);
    handleClose();
  };

  return (
    <MenuButton
      data-testid="date-picker"
      icon={<IconCalendar />}
      label="Date"
      open={open}
      selectedValue={formatDate(calendar.selected)}
      onClick={handleClick}
      onClose={handleClose}
    >
      <Calendar {...calendar} from={from} to={to} onSelect={handleSelectDay} />
    </MenuButton>
  );
}
