import { DiReact } from "react-icons/di"
import { TbBrandNextjs } from "react-icons/tb"

const Footer = () => {
  return (
    <div className="py-2 flex items-center justify-center dark:text-white">
      <h2 className="mr-1">Built with React </h2><a href="https://react.dev/"><DiReact size={30} className=" text-slate-600 dark:text-slate-400 react-icon"/></a><h2 className="mr-1">+ Next.js </h2><a href="https://nextjs.org/"><TbBrandNextjs size={30} className="next-icon"/></a>
    </div>
  )
}

export default Footer
