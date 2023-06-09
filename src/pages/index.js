import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useState } from 'react';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode? "dark" : ""}>
      <Head>
        <title>Luca Di Vittorio | Full Stack Developer</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-slate-700">
        <Navbar darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
        <Main />
        <About />
        <Projects />
        <Contact darkMode={darkMode} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
