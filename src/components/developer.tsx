"use client";
import React from "react";
import { cn } from "../utils/cn";
import { DeveloperHoverEffect } from "./ui/developerHoverEffect.tsx";

// import images locally
import ico from "../assets/developers/ico.jpg";
import luis from "../assets/developers/luis.jpg"
import jed from "../assets/developers/jed.jpg"

const people = [
  {
    id: 1,
    name: "Luis Adrian De Mesa",
    designation: "Sophomore",
    image:
    luis,
  },
  {
    id: 2,
    name: "Jerico Roen de Vega",
    designation: "Sophomore",
    image:
    ico,
  },
  {
    id: 3,
    name: "Jed Alain Silva",
    designation: "Sophomore",
    image:
    jed,
  }
];

export function DeveloperHover() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <DeveloperHoverEffect items={people} />
    </div>
  );
}
