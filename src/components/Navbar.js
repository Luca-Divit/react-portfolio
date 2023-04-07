import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import React from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <div className="flex justify-between py-5 px-10 items-center fixed w-full bg-white z-10">
      <h1 className="cursor-pointer font-dancing text-xl hover:drop-shadow-lg shadow-slate-500"><a href="#">Luca Di Vittorio</a></h1>
      <ul className="flex items-center">
        <li className="cursor-pointer text-xl opacity-70 hover:opacity-100 hover:drop-shadow-xl shadow-slate-500">{ darkMode ? <MdOutlineLightMode onClick={() => (setDarkMode(!darkMode))}/> : <GiNightSleep onClick={() => (setDarkMode(!darkMode))}/> }</li>
        <li className="text-lg ml-10 py-1 px-3 rounded-lg cursor-pointer opacity-90 hover:opacity-100 hover:shadow-md shadow-slate-500 gradient"><a href="#">Resume</a></li>
      </ul>
    </div>
  )
}

export default Navbar
