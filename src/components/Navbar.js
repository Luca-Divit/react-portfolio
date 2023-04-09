import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [scrollTop, setScrollTop] = useState(0);

  let opacity = scrollTop / 800

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-between py-5 px-10 items-center fixed w-full bg-white z-20 dark:bg-slate-700 dark:text-white">
      <h1 className="cursor-pointer font-dancing text-xl hover:drop-shadow-lg shadow-slate-500" style={{opacity: opacity}}><a href="#">Luca Di Vittorio</a></h1>
      <ul className="flex items-center">
        <li className="cursor-pointer text-xl opacity-70 hover:opacity-100 hover:drop-shadow-xl shadow-slate-500">{ props.darkMode ? <MdOutlineLightMode size={25} onClick={props.onClick}/> : <GiNightSleep size={25} onClick={props.onClick}/> }</li>
      </ul>
    </div>
  )
}

export default Navbar
