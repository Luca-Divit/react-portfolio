import React from 'react'
import Project from '../components/Project'
import { nanoid } from 'nanoid'

import GymBuddyDesktop from '../assets/images/gymBuddyDesktop.png'
import GymBuddy from '../assets/images/gymBuddy.gif'
import Bnp from '../assets/images/bnpDesktop.png'
import BnpGif from '../assets/images/bnp.gif'
import findDesktop from '../assets/images/findDesktop.png'
import findMobile from '../assets/images/findMobile.gif'

const Projects = () => {
  return (
    <div className="project-area py-2 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-400 dark:text-white">
      <section id="projects">
      <h1 className="text-5xl p-4 font-medium my-16">Projects</h1>
      {/* Ensure desktop images are at 16:9 ratio */}
      {/* Ensure mobile images are at 13:6 */}

      <Project
        id={nanoid()}
        name="GymBuddy"
        images={[
          { img: GymBuddyDesktop, mobile: false },
          { img: GymBuddy, mobile: true },
        ]}
        videoDemo={
          'https://www.youtube.com/watch?v=Nd7i4pmckf0&list=PLkbmdtbypn7TaaSLn0twxAxZ1FIiu6PIS&index=15&ab_channel=LeWagon'
        }
        github="https://github.com/Luca-Divit/gym-buddy"
        stack={['Ruby on Rails', 'API', 'Stimulus']}
        desc={`<strong>Web and phone app that helps users find their next gym partner.</strong> \n featuring a refined search by workouts, days preferences, request to buddy up, and acceptance/skip options. The app also includes a map and chat functionalities to arrange sessions. \nStack used: Ruby on Rails, Es6, StimulusJS, PostgreSQL, Scss and Bootstrap`}
      />

      <Project
        id={nanoid()}
        name="Find (Hack for Peace Hackathon)"
        images={[
          { img: findDesktop, mobile: false },
          { img: findMobile, mobile: true },
        ]}
        github="https://github.com/Luca-Divit/Find"
        stack={['API', 'JavaScript', 'Tailwind']}
        desc={`Find enables users to locate their missing loved ones by uploading a picture, which then gets compared to a hospital database of unidentified patients, leveraging a facial recognition API.\n Find was developed alongside 3 team members over 2 days at Hack for Peace, a Cross-European Hackathon where over 200 developers and entrepeneurs came together to build anti-war tech products.\n<strong>Our team made it to the finals, coming in 6th place overall</strong>`}
      />

      <br/>
      <br/>

      <Project
        id={nanoid()}
        name="BnP Boats and Parties"
        images={[
          { img: Bnp, mobile: false },
          { img: BnpGif, mobile: false },
        ]}
        github="https://github.com/Luca-Divit/bnp"
        stack={['Ruby on Rails', 'Stimulus JS', 'SCSS']}
        desc={`An AirBnB clone where you can rent... <strong>Boats!</strong>
        \n Built with Ruby on Rails, Stimulus JS and SCSS`}
      />
    </section>
    </div>
  )
}

export default Projects
