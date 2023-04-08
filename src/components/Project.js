import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import TechPill from '../components/TechPill'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

const Project = ({
  id,
  name,
  images,
  url,
  videoDemo,
  github,
  desc,
  stack,
}) => {
  // State initializers
  const [selectedId, setSelectedId] = useState(null)
  const [activeIndex, setActiveIndex] = useState('')

  // Handler functions
  function handleClick() {
    setSelectedId(id)
    setActiveIndex(0)
  }
  function handleSlideChange(event) {
    setActiveIndex(event.activeIndex)
  }

  // Allow newline, strong tags in paragraphs
  function replaceMarkup(text) {
    return text
      .replace(/\n/g, '<br />')
      .replace(/<strong>/g, '<strong>')
      .replace(/<\/strong>/g, '</strong>')
  }

  // Apply backdrop
  useEffect(() => {
    if (selectedId) {
      document.body.classList.add('body-modal-backdrop')
    } else {
      document.body.classList.remove('body-modal-backdrop')
    }
  }, [selectedId])

  // Map over images, create slides distinguishing mobile or not
  const slides = images.map((value, index) => (
    <SwiperSlide key={index}>
      <motion.img src={value.img.src} alt="demo"></motion.img>
      <motion.button
        whileHover={{ rotate: -15, scale: 1.1 }}
        className={`${
          value.mobile
            ? 'absolute top-2 right-4'
            : 'absolute top-2 right-4 md:right-8'
        }`}
        onClick={() => setSelectedId(null)}
      >
        <FontAwesomeIcon icon={faXmark} className="text-5xl" />
      </motion.button>
    </SwiperSlide>
  ))

  // Store boolean, demo image mobile or not
  const mobileImageOrNot = images.map((value) => ({ mobile: value.mobile }))

  // Map TechPill components
  const stackPills = stack.map((name, index) => (
    <TechPill key={index} name={name} />
  ))

  return (
    <div className="flex flex-col items-center md:items-start md:h-[80vh]">
      <motion.div
        layoutId={id}
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.1 },
        }}
        className="md:w-2/3 cursor-pointer"
        onClick={handleClick}
      >
        <motion.img
          src={images[0].img.src}
          alt="demo"
          className="filter grayscale-[50%]"
        ></motion.img>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              layoutId={selectedId}
              className={`${
                mobileImageOrNot[activeIndex].mobile
                  ? 'selected-project mobile-project'
                  : 'selected-project'
              }`}
            >
              <Swiper
                onSlideChange={handleSlideChange}
                className="my-swiper"
                modules={[Navigation]}
                navigation={true}
              >
                {slides}
              </Swiper>
            </motion.div>
            <div
              className="modal-backdrop cursor-pointer"
              onClick={() => setSelectedId(null)}
            ></div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        whileInView={{ y: [0, -70, -50] }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.8, bounce: 1 }}
        className="relative bottom-5 md:bottom-48  md:left-1/3 w-4/5 md:w-3/5"
      >
        <div>
          <h1
            className="text-center text-xl font-semibold p-3 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-400"
            id="project-card-name"
          >
            {name}
          </h1>
        </div>
        <div className={` p-4 border bg-gray-50 m-auto md:m-0 dark:bg-slate-700 dark:border-none`}>
          <p
            className="my-3"
            dangerouslySetInnerHTML={{ __html: replaceMarkup(desc) }}
          />
          <div className="flex flex-wrap">{stackPills}</div>
          <div className="flex justify-end flex-wrap">
            {url && (
              <motion.span
                className="mx-4 mt-2 md:mt-0"
                whileHover={{ scale: 0.95 }}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  Live site
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faUpRightFromSquare}
                  />
                </a>
              </motion.span>
            )}
            {videoDemo && (
              <motion.span
                className="mx-4 mt-2 md:mt-0"
                whileHover={{ scale: 0.95 }}
              >
                <a href={videoDemo} target="_blank" rel="noreferrer">
                  Video Demo
                  <FontAwesomeIcon className="ml-2 scale-50 relative -top-4" icon={faVideo} />
                </a>
              </motion.span>
            )}
            <motion.span
              className="mx-4 mt-2 md:mt-0"
              whileHover={{ scale: 0.95 }}
            >
              <a href={github} target="_blank" rel="noreferrer">
                Github
                <FontAwesomeIcon className="ml-2 scale-50" icon={faUpRightFromSquare} />
              </a>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Project
