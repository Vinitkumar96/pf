import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-3xl px-3 w-full  mx-auto h-screen p-2 inset-shadow-xs inset-shadow-white/40 mt-4 rounded-2xl">
      <div className="flex justify-end text-sm font-mono mr-2 pb-1">Hey,there!</div>
      {/* top section */}
      <div className="border border-neutral-800 inset-shadow-xs inset-shadow-white/30 p-3  mb-6 rounded-xl">
        <div className="flex flex-col md:flex-row">
          <div className="relative">
            <Image
              src="/gitvinit.jpg"
              width={80}
              height={80}
              alt="vinit pic"
              className="rounded-xl border-4 border-white "
            />
            {/* <div className="absolute top-[-2px] right-[-4px]">
            <span className="relative flex size-3 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-rose-400"></span>
            </span>
            </div> */}
           
          </div>

          <div className="pt-2 md:pt-0 md:pl-3 flex flex-col  ">
            <h1 className="text-3xl font-semibold m-0 p-0 font-playfair mb-1 ">Vinit kumar</h1>
            <p className="text-lg text-neutral-300 pl-1">Fullstack dev</p>
            {/* <ul className="flex gap-2 text-sm flex-wrap ">
              <li>Ts</li>
              <li>Next</li>
              <li>React</li>
              <li>Node</li>
              <li>Mongo</li>
              <li>Postgres</li>
              <li>supabase</li>
              <li>prisma</li>
            </ul> */}
            <p className="text-sm text-neutral-400 pl-1">I build and ship products at high speed, putting in the hours to turn ideas into working software</p>
          </div>
        </div>
      </div>

      {/* skills section */}
      <div className="border border-neutral-800 inset-shadow-xs inset-shadow-white/30 p-3  rounded-xl">
      <h1 className="text-xl font-bold">skills</h1>
          react  node  mongo
      </div>
    </div>
  );
};

export default page;
