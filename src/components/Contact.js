import { useState, useEffect } from 'react';
import { sendForm } from 'emailjs-com';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
// require('dotenv').config()

const Contact = (props) => {
  const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
  const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_USER_ID

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [formValid, setFormValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setFormValid(
      formData.user_name.length > 0 &&
        formData.user_email.length > 0 &&
        formData.message.length > 0
    )
  }, [formData])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formValid) return
    const form = event.target
    sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form, YOUR_PUBLIC_KEY)
      .then(() => {
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        })
        setSubmitted(true)
      })
      .catch((error) => console.error(error))
  }
  return (
    <motion.section
      initial={{ marginInline: '0' }}
      whileInView={{ marginInline: '6vw' }}
      transition={{ delay: 0.5 }}
      className="py-10 text-center text-black rounded-2xl"
    >
      <div className="flex flex-col md:flex-row p-8 md:p-16">
        <div className="md:w-3/5 text-black flex flex-col">
          <h1 className="text-5xl md:p-4 mb-4 font-medium text-center md:text-left dark:text-white">
            Get in touch!
          </h1>
          <h4 className=" text-left text-black md:pl-4 px-2 md:w-3/5 mb-4 dark:text-white">
            <i>
              Always happy to chat, feel free to send a message and I will get
              back to you soon!
            </i>
          </h4>
          <div className="flex-grow flex flex-col justify-evenly" >
            <div className={props.darkMode? "text-sm md:text-base text-left gradient-hoverdm md:w-1/2 rounded-xl flex items-center" : "text-sm md:text-base text-left gradient-hover md:w-1/2 rounded-xl flex items-center"}>
              <a href="mailto:luca.div@,hotmail.com" className="pl-4">
                <HiMail alt="Mail icon" className="w-4 h-4 md:w-6 md:h-6 dark:text-white"/>
              </a>
              <h3 className="m-4 dark:text-white">luca.div@hotmail.com</h3>
            </div>
            <div className={props.darkMode? "text-sm md:text-base text-left gradient-hoverdm md:w-1/2 rounded-xl flex items-center" : "text-sm md:text-base text-left gradient-hover md:w-1/2 rounded-xl flex items-center"}>
              <a
                href="https://goo.gl/maps/sk91BQQFthDrQSQ86"
                className="pl-4 text-base md:text-2xl dark:text-white"
              >
                <MdLocationOn />
              </a>
              <h3 className="m-4 dark:text-white">London, United Kingdom</h3>
            </div>
          </div>

          <span className="flex flex-grow md:ml-4 md:w-1/5 md:items-center justify-end md:justify-evenly">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Luca-Divit"
              target={'_blank'}
              rel="noreferrer"
            >
              <BsGithub className="contact-socials dark:text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/di-vittorio/"
              target={'_blank'}
              rel="noreferrer"
            >
              <AiFillLinkedin className="contact-socials dark:text-white" />
            </motion.a>
          </span>
        </div>
        <div className="md:w-2/5 md:mx-auto md:mr-0 p-4 lg:px-6 gradient rounded-2xl text-left md:h-[60vh] dark:text-white dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-400">
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="form-group mb-6">
              <label htmlFor="user_name">Your name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="user_email">Your email</label>

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex-grow">
              <label htmlFor="message">Message</label>

              <textarea
                className=" h-[86%]
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                id="exampleFormControlTextarea13"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group mb-6">
              <button
                disabled={!formValid}
                type="submit"
                className={`
          w-full
          px-6
          py-2.5
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out
          ${
            submitted
              ? 'bg-green-600 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg'
              : ' bg-amber-400 hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg dark:bg-slate-600 dark:hover:bg-slate-700 dark:hover:shadow-lg dark:focus:bg-slate-700 dark:focus:shadow-lg dark:focus:outline-none dark:focus:ring-0 dark:active:bg-slate-800 dark:active:shadow-lg'
          }
          `}
              >
                {submitted ? 'Email sent!' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
