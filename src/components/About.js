const About = () => {
  return (
    <div className="my-16 w-9/12 mx-auto media lg:flex lg:min-h-screen lg:items-center dark:text-white">
      <div>
        <h2 className="my-3 text-5xl">Skills</h2>
        <ul>
          <li><h2 className="text-2xl">Javascript (ES6+)</h2></li>
          <li><h2 className="text-2xl">React</h2></li>
          <li><h2 className="text-2xl">Next.js</h2></li>
          <li><h2 className="text-2xl">Node.js</h2></li>
          <li><h2 className="text-2xl">Ruby</h2></li>
          <li><h2 className="text-2xl">Ruby on Rails</h2></li>
          <li><h2 className="text-2xl">Rspec</h2></li>
        </ul>
      </div>
      <div className="text-end w-9/12 ml-auto lg:w-4/12">
        <h2 className="my-3 text-5xl">About</h2>
        <p className="text-xl">I have always had a natural curiosity about how things work, which sparked my interest in coding. The endless possibilities and opportunities for creativity in this field have captivated me. Currently, I work as a freelance developer, offering my services in both front-end and back-end development. Additionally, I have the privilege of teaching coding at BCS Tech 10 accredited Le Wagon coding bootcamp in London.</p>
      </div>
    </div>
  )
}
 export default About
