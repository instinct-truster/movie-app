import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
