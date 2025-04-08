import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { counterState } from "../atoms/counterAtom";

function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const resetCount = useResetRecoilState(counterState);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Count: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          ➖ Decrease
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          ➕ Increase
        </button>
        <button
          onClick={resetCount}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
        >
          🔁 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
