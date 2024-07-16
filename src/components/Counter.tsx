'use client';

import { useCounterStore } from '@/stores/useCounterStore';

export function Counter() {
  const { counter, increaseCounter, resetCounter } = useCounterStore();
  return (
    <div className="mt-5 flex-col space-y-3 flex-center">
      <h5>Zustand Basic Counter Example</h5>
      <p>Current Count: {counter}</p>
      <div className="mt-3 flex w-[50%] justify-between">
        <button
          className="rounded bg-blue-500 px-3 py-1 text-white"
          onClick={() => resetCounter()}
        >
          Reset
        </button>
        <button
          className="rounded bg-blue-500 px-3 py-1 text-white"
          onClick={() => increaseCounter()}
        >
          +
        </button>
      </div>
    </div>
  );
}
