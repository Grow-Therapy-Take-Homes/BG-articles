import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type AppState = {
  limit: number;
  date: Date;
  setDate(day: Date): void;
  setLimit(value: number): void;
};

const lastDateOfData = new Date();
lastDateOfData.setDate(lastDateOfData.getDate() - 2);

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      date: lastDateOfData,
      setDate(day: Date) {
        const lastDataDate = new Date();
        lastDataDate.setDate(lastDataDate.getDate() - 2);

        if (day > lastDataDate) {
          day = lastDataDate;
        }

        set(() => ({ date: day }));
      },
      limit: 25,
      setLimit(value: number) {
        set(() => ({ limit: value }));
      },
    }),
    { name: "AppStore" },
  ),
);
