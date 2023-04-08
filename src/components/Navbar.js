import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import React from "react";

const Navbar = (props) => {
  console.log(props)
  return (
    <div className="flex justify-between py-5 px-10 items-center fixed w-full bg-white z-10 dark:bg-slate-700 dark:text-white">
      <h1 className="cursor-pointer font-dancing text-xl hover:drop-shadow-lg shadow-slate-500"><a href="#">Luca Di Vittorio</a></h1>
      <ul className="flex items-center">
        <li className="cursor-pointer text-xl opacity-70 hover:opacity-100 hover:drop-shadow-xl shadow-slate-500">{ props.darkMode ? <MdOutlineLightMode onClick={props.onClick}/> : <GiNightSleep onClick={props.onClick}/> }</li>
        <li className="text-lg ml-10 py-1 px-3 rounded-lg cursor-pointer opacity-90 hover:opacity-100 hover:shadow-md shadow-slate-500 gradient dark:bg-gradient-to-r dark:from-violet-900 dark:to-violet-500"><a href="#">Resume</a></li>
      </ul>
    </div>
  )
}

export default Navbar
