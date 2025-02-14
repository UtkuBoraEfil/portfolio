"use client";
import React, { useState } from "react";

import { professionalExperience } from "@/lib/data";
import { ExperienceCard } from "./ui/experience-card";

export function Experience() {
  const [active, setActive] = useState(0);
  function handleClick(index: number) {
    if (active === index) {
      setActive(-1);
      return;
    }
    setActive(index);
  }
  return (
    <div className="mx-auto py-10 max-w-[750px] pt-40">
      <h1 className="text-center text-4xl md2:text-6xl font-semibold">
        Professional
        <br />
        Experience
      </h1>
      <div className="flex flex-col gap-2 mt-10">
        {professionalExperience.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            isActive={active === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
