import { create } from "zustand";

export type AppState = {
  limit: number;
  date: Date;
  setDate(day: Date): void;
  setLimit(value: number): void;
};

/**
 * Data uploads can sometimes take more than 24 hours. This will help ensure that the intial
 * page load includes data for a slightly better experience.
 * */
const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

export const useAppStore = create<AppState>()((set) => ({
  date: twoDaysAgo,
  setDate(day: Date) {
    set(() => ({ date: day }));
  },
  limit: 100,
  setLimit(value: number) {
    set(() => ({ limit: value }));
  },
}));
