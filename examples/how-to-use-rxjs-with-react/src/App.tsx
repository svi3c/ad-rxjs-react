import React, { useState } from "react";
import "./App.css";
import { CountClass } from "./clock/CountClass";
import { CountCustomHook } from "./clock/CountCustomHook";
import { CountFunction } from "./clock/CountFunction";
import { CountObservableHook } from "./clock/CountObservableHook";

const components: Array<
  React.ComponentClass | React.FunctionComponent | null
> = [
  null,
  CountClass,
  CountFunction,
  CountCustomHook,
  CountObservableHook,
];

function App() {
  const [idx, setIdx] = useState(0);
  const ReactiveComponent = components[idx];
  return (
    <div className="flex flex-col gap-4 md:w-2/3 lg:w-1/2 p-4 mx-auto">
      <h1 className="text-3xl font-bold">RxJS + React</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">
          Component:{" "}
          <strong className="whitespace-nowrap">
            {ReactiveComponent?.name ?? "No component"}
          </strong>
        </h2>
        <button
          className="p-2 font-bold text-white font-bold bg-mariner-500 hover:bg-mariner-700"
          onClick={() =>
            setIdx((idx + 1) % components.length)
          }
        >
          Switch
        </button>
      </div>
      {ReactiveComponent && (
        <div className="p-4 bg-mariner-900 border border-mariner-800">
          <ReactiveComponent></ReactiveComponent>
        </div>
      )}
    </div>
  );
}

export default App;
