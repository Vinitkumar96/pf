import Project from "@/components/comonent/project";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="max-w-4xl px-3 w-full  mx-auto min-h-screen border">
      <div className=" mt-3 mb-4  cursor-pointer text-neutral-400 hover:text-neutral-300 transition-all">
        <Link href="/" >
          back
        </Link>
      </div>
      <Project/>
      Projects section empty rn
    </div>
  );
};

export default Projects;
