import { create } from "zustand";

export type AppState = {
  limit: number;
  date: Date;
  setDate(day: Date): void;
  setLimit(value: number): void;
};

const lastDateOfData = new Date();
lastDateOfData.setDate(lastDateOfData.getDate() - 1);

export const useAppStore = create<AppState>()((set) => ({
  date: lastDateOfData,
  setDate(day: Date) {
    // Recreating this each time to avoid edge cases.
    const lastDayOfData = new Date();
    lastDayOfData.setDate(lastDayOfData.getDate() - 1);

    if (day > lastDayOfData) {
      day = lastDayOfData;
    }

    set(() => ({ date: day }));
  },
  limit: 100,
  setLimit(value: number) {
    set(() => ({ limit: value }));
  },
}));
