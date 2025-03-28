import { useState } from "react";

interface CounterProps {
  name: string;
}

export default function Counter({ name }: CounterProps) {
  var [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 w-80 p-4 border rounded-lg">
      <div className="flex gap-5">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h1 className="text-2xl font-bold">Score: {count}</h1>
      </div>
      <div className="flex gap-5">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={count > 0 ? () => setCount(count - 1) : () => {}}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
