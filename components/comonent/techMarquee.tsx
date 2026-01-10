import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { techStackOne, techStackTwo } from "@/lib/tools";

const TechMarquee = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:70s]">
        {techStackOne.map((tool) => (
          <div key={tool.name} className="whitespace-nowrap px-4 py-2  bg-neutral-800 rounded-2xl">
            {tool.name}
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:70s]">
        {techStackTwo.map((tool) => (
          <div key={tool.name} className="whitespace-nowrap px-4 py-2  bg-neutral-800 rounded-2xl">
            {tool.name}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
