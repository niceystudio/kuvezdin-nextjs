"use client";
import { useState } from "react";
import HeroVariant1 from "./HeroVariant1";
import HeroVariant2 from "./HeroVariant2";

export default function HeroSelector() {
  const [selected, setSelected] = useState<1 | 2>(1);

  return selected === 1
    ? <HeroVariant1 selected={selected} setSelected={setSelected} />
    : <HeroVariant2 selected={selected} setSelected={setSelected} />;
}
