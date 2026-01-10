import Image from "next/image";
import TechMarquee from "@/components/comonent/techMarquee";

const page = () => {
  return (
    <div className="max-w-4xl px-3 w-full  mx-auto h-screen ">
      <div className="flex justify-end text-2xl font-mono mr-2 mt-2  instrument-serif ">
        Hey,there!
      </div>
      {/* top section */}
      <div className="border border-neutral-800 inset-shadow-xs inset-shadow-white/30 p-3 mt-3 mb-6 rounded-xl">
        <div className="flex flex-col md:flex-row">
          <div className="relative">
            <Image
              src="/gitvinit.jpg"
              width={80}
              height={80}
              alt="vinit pic"
              className="rounded-xl border-4 border-white "
            />
          </div>

          <div className="pt-2 md:pt-0 md:pl-3 flex flex-col  ">
            <h1 className="text-3xl font-semibold m-0 p-0 instrument-serif mb-0.5 ">
              Vinit kumar
            </h1>
            <p className="text-lg text-neutral-300 pl-1 ">Fullstack dev</p>
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
            <p className="text-sm text-neutral-400 pl-1">
              I build and ship products at high speed, putting in the hours to
              turn ideas into working software
            </p>
          </div>
        </div>
      </div>

      {/* Tools section */}
      <div className="my-6">
        <h1 className="text-xl instrument-serif">Tools I Tinker With</h1>
        <TechMarquee />
      </div>

      {/* projects section */}
      <div className="border border-neutral-800 inset-shadow-xs inset-shadow-white/30 p-3  rounded-xl">
        <h1 className="text-2xl font-bold instrument-serif">Projects</h1>
          burn projects
      </div>
    
    </div>
  );
};

export default page;
