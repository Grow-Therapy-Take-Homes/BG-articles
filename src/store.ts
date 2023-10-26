import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type AppState = {
  date: Date;
  setDate(date: Date): void;
};

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      date: new Date(),
      setDate(date: Date) {
        const lastDataDate = new Date();
        lastDataDate.setDate(lastDataDate.getDate() - 2);

        if (date > lastDataDate) {
          date = lastDataDate;
        }

        set({ date });
      },
    }),
    { name: "AppStore" },
  ),
);
