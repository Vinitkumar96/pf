import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiExpress,SiTypescript,SiPrisma,SiSupabase,SiShadcnui,SiExpo,SiPostman} from "react-icons/si";
import { FaReact,FaNodeJs,FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiBearFace } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const stackList = [
  {
    name:"MongoDB",
    ic:<DiMongodb color="green" />
  },
  {
    name:"Express",
    ic:<SiExpress />
   },
  {
    name:"React",
    ic:<FaReact color="#2B7FFF" />
  },
  {
    name:"Node",
    ic:<FaNodeJs color="green"/>
  },
  {
    name:"Typescript",
    ic:<SiTypescript color="#2B7FFF"/>
  },
  {
    name:"Nextjs",
    ic:<RiNextjsFill/>
  },
  {
    name:"PostgresSQL",
    ic:<BiLogoPostgresql color="#2B7FFF"/>
  },
  {
    name:"Prisma",
    ic:<SiPrisma/>
  },
  {
    name:"Zustand",
    ic:<GiBearFace color="#453F39"/>
  },
  {
    name:"Supabase",
    ic:<SiSupabase color="#3DC98A"/>
  },
  {
    name:"Shadcn",
    ic:<SiShadcnui />
  },
  {
    name:"Javascript",
    ic:<FaJs color="#F7DF1E"/>
  },
  {
    name:"React Native",
    ic:<FaReact />
  },
  {
    name:"Expo",
    ic:<SiExpo color="#EDEEF0" />
  },
  {
    name:"git/github",
    ic:<FaGithub/>
  },

]

const Stack = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-1 md:space-x-4 space-y-2  md:space-y-2 border-x  rounded-2xl border-neutral-600/70 p-2  border-t border-t-neutral-600/40 mb-4 md:pt-6 pt-4 px-1">
     {
      stackList.map((s,i) => {
        return(
          <div key={i} className="bg-[#0A0A0A] rounded-xl px-4 py-2 flex items-center gap-0.5  border cursor-pointer border-dashed hover:border-neutral-600 transition-all  ">
            {s.ic}
            <p className="text-[12px] font-mono">{s.name} </p>
          </div>
        )
      })
     }
    </div>
  );
};

export default Stack;
