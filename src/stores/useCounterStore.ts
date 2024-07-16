import { create } from 'zustand';

type CounterState = {
  counter: number;
  increaseCounter: () => void;
  resetCounter: () => void;
};

export const useCounterStore = create<CounterState>()((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  resetCounter: () => set({ counter: 0 }),
}));
