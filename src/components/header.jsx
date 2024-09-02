"use client";

import Image from "next/image";
import addIcon from "@/assets/add.svg";
import { useSetAtom } from "jotai";
import { switchAtom } from "./switch-atom";

export const Header = () => {
  const setSwitch = useSetAtom(switchAtom);

  function handleSwitch() {
    setSwitch((currValue) => !currValue);
  }

  return (
    <header>
      <h1>Libri</h1>
      <Image src={addIcon} alt="add icon" className="bg-red-500" onClick={handleSwitch} />
    </header>
  );
};
