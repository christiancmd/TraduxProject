import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";

export default function IconTools() {
  return (
    <article className="flex w-lg justify-between">
      <div>
        <SiTypescript
          className="size-16 transition duration-200 ease-in-out filter hover:text-blue-600  hover:drop-shadow-[0_0_10px_rgba(49,120,198,0.8)]"
        />
      </div>

      <div>
        <FaReact
          className="size-16 transition duration-200 ease-in-out filter hover:text-cyan-500 hover:drop-shadow-[0_0_10px_rgba(97,218,251,0.8)]"
        />
      </div>

      <div>
        <RiTailwindCssFill
          className="size-16 transition duration-200 ease-in-out filter hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        />
      </div>

      <div>
        <ImHtmlFive
          className="size-16 transition duration-200 ease-in-out filter hover:text-orange-600 hover:drop-shadow-[0_0_10px_rgba(227,79,38,0.8)]"
        />
      </div>
    </article>
  );
}
