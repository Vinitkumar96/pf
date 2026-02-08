import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  return (
    <div className="flex  flex-start space-x-4  rounded-2xl border-x border-neutral-600/70 px-8 py-3  border-t border-t-neutral-600/40 mb-4 cursor-pointer ">
        <div className="flex text-sm items-center gap-1 group"><FaLinkedin color="#2B7FFF" /> Linkedin
        </div> 
        <div className="flex text-sm items-center gap-1"><FaGithub color="#2B7FFF" /> Github</div> 
        <div className="flex text-sm items-center gap-1"><SiLeetcode color="#2B7FFF" /> Leetcode</div> 
    </div>
  )
}

export default Social