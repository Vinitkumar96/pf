import React from "react";

const stackList = [
  {
    name:"MongoDB"
  },
  {
    name:"Express"
   },
  {
    name:"React"
  },
  {
    name:"Node"
  },
  {
    name:"Typescript"
  },
  {
    name:"Nextjs"
  },
  {
    name:"PostgresSQL"
  },
  {
    name:"Prisma"
  },
  {
    name:"Zustand"
  },
  {
    name:"Supabase"
  },
  {
    name:"Shadcn"
  },
  {
    name:"React Native"
  },
  {
    name:"Expo"
  },
  {
    name:"Git/github"
  },
  {
    name:"Postman"
  }
]

const Stack = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-6  space-y-1 border-x  rounded-2xl border-neutral-600/70 p-2  border-t border-t-neutral-600/40 mb-4">
     {
      stackList.map((s) => {
        return(
          <div className="bg-neutral-700 rounded-xl px-4 py-2 min-w-fit  flex">
            <p className="text-[12px] font-mono">{s.name} </p>
          </div>
        )
      })
     }
    </div>
  );
};

export default Stack;
