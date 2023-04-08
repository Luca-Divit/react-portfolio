const Main = () => {
  return (
    <div className="area dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-400 dark:text-white">
      <div className="text-center mx-8 py-44">
        <h1 className="text-5xl my-12">Luca Di Vittorio</h1>
        <h2 className="text-3xl my-12">Full Stack Developer</h2>
        <p className="text-lg my-12 md:max-w-lg md:mx-auto">
          I create useful and visually appealing web applications using the latest technologies and tools.
        </p>
      </div>
        <div className=" bg-gray-400 h-16 w-7 rounded-2xl flex justify-center mx-auto py-1 lg:relative md:relative sm:relative xs:relative -top-32">
          <a href="#about" className="z-10">
            <div className="pin bg-slate-50 w-4 h-4 rounded-full"></div>
          </a>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div id="about"></div>
    </div>
  )
}

export default Main
