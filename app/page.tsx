import Image from "next/image";
import TechMarquee from "@/components/comonent/techMarquee";
import Link from "next/link";
import Project from "@/components/comonent/project";

const page = () => {
  return (
    <div className="max-w-[950px] px-3 w-full  mx-auto min-h-screen">
      <div className="flex justify-start text-xl font-mono ml-4 mt-4 mb-2   instrument-serif ">
        Hey,there!
      </div>
      {/* top section */}
      <div className=" border-x-2  rounded-2xl border-neutral-600/70 p-6 mb-6 shadow-2xl shadow-gray-800/20 border-t-2 border-t-neutral-600/40">
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

          <div className="pt-2 md:pt-0 md:pl-4 flex flex-col  ">
            <h1 className="text-3xl font-semibold m-0 p-0 instrument-serif mb-0.5 ">
              Vinit kumar
            </h1>
            <p className="text-lg text-neutral-300 md:pl-1 roboto-slab">Fullstack dev</p>
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
            <p className="text-sm text-neutral-400 md:pl-1 roboto-slab">
              I build and ship products at high speed, putting in the hours to
              turn ideas into working software
            </p>
          </div>
        </div>
      </div>

      {/* Tools section */}
      <div className="mt-7 mb-10 ">
        <h1 className="text-xl instrument-serif mb-2 ml-4">Tools I Tinker With</h1>
        <TechMarquee />
      </div>

      {/* projects section */}
      <div className="border-x-2 border-neutral-800  inset-shadow-xs inset-shadow-white/30 p-6  rounded-xl ">
        <div className="flex justify-between px-4 my-3">
            <h1 className="text-2xl font-bold instrument-serif">Projects</h1>
            <Link href={"/proj"}>
            <div className="flex gap-2">
            <p className="text-sm cursor-pointer text-neutral-400 hover:text-neutral-300 transition-all roboto-slab ">View more </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="skyBlue" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-big-right-icon lucide-arrow-big-right"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/></svg>
            </div>
            </Link>
        </div>
          <Project/>
      </div>
    
    </div>
  );
};

export default page;
