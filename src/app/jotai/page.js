"use client";

import { atom, useSetAtom, useAtomValue } from "jotai";

const switchAtom = atom(false);

const SetTrueButton = () => {
  const setCount = useSetAtom(switchAtom);
  const setTrue = () => setCount(true);

  return (
    <div>
      <button onClick={setTrue}>Set True</button>
    </div>
  );
};

const SetFalseButton = () => {
  const setCount = useSetAtom(switchAtom);
  const setFalse = () => setCount(false);

  return (
    <div>
      <button onClick={setFalse}>Set False</button>
    </div>
  );
};

export const SwitchButton = () => {
  const setCount = useSetAtom(switchAtom);
  function handleSwitchButton() {
    setCount((currValue) => !currValue);
  }

  return (
    <div>
      <button onClick={handleSwitchButton}>Switch</button>
    </div>
  );
};

export default function App() {
  const state = useAtomValue(switchAtom);

  return (
    <div>
      State: <b>{state.toString()}</b>
      <SetTrueButton />
      <SetFalseButton />
      <SwitchButton />
    </div>
  );
}
