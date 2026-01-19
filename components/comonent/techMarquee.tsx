import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { techStackOne, techStackTwo } from "@/lib/tools";

const TechMarquee = () => {
  return (
    <div className="relative py-5 border-t-2 border-t-neutral-600/50 flex w-full flex-col items-center justify-center overflow-hidden space-y-3 border-x-2 rounded-2xl border-neutral-600/70 shadow-2xl shadow-gray-800/20 ">
     
      <Marquee pauseOnHover className="[--duration:120s]">
        {techStackOne.map((tool) => (
          <div key={tool.name} className="whitespace-nowrap px-4 py-2  bg-neutral-800 rounded-2xl">
            {tool.name}
          </div>
        ))}
      </Marquee>
    
    
      <Marquee pauseOnHover reverse className="[--duration:120s]">
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
