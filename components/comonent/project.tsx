import React from "react";
import Image from "next/image";

const projects = [
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
    live: "live",
    github: "github",
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
      live: "live",
      github: "github",
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
      live: "live",
      github: "github",
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
      live: "live",
      github: "github",
  }
];

const Project = () => {
  return (
    <div className="w-full ">

      <div className="grid md:grid-cols-2 gap-6 p-1  ">
        {projects.map((project, i) => {
          return (
            <div key={i} className=" rounded-lg  w-full">
              <div className="w-full ">
                <Image
                  src={project.thumbnail}
                  width="300"
                  height="100"
                  alt="project pfp"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <div className="my-2">
                  <h1 className="text-xl instrument-serif">{project.heading}</h1>
                  <p className="text-sm text-neutral-300">
                    {project.tools.map((tool, index) => {
                      return (
                        <span key={index}>
                          {index !== project.tools.length - 1
                            ? tool + " / "
                            : tool}
                        </span>
                      );
                    })}
                  </p>
                </div>
                <div className="mb-1">
                  <p className="mb-1 text-neutral-400">{project.about}</p>
                  <div className="flex gap-2">
                    <span className="text-md">{project.live}</span>
                    <span className="text-md">{project.github}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
