import React, { useEffect } from 'react';
import classes from './services.module.css';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {

  const [ref, inView] = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,

      })
    }

    if (!inView) {
      animation.start({
        y: '-100vh'
      })
    }
  }, [inView])

  return (
    <div className="h-[100vh]  relative overflow-hidden">
      {/* Gradient color */}
      <div ref={ref}>
        <motion.div animate={animation} transition={{ duration: 0.6 }} className="absolute bg-indigo-400 opacity-30 filter bg-blend-luminosity blur-3xl rounded-full w-[60%] h-[80%] -right-60 -top-6">
        </motion.div>
        <motion.div animate={animation} transition={{ duration: 1.1 }} className="absolute bg-purple-800 opacity-50 filter  blur-3xl rounded-full w-[50%] h-[70%] right-32 -top-20"></motion.div>
        <motion.div animate={animation} transition={{ duration: 1.4 }} className="absolute bg-red-500 opacity-40 filter bg-blend-luminosity blur-3xl rounded-full w-[30%] h-[60%] right-32 -top-20"></motion.div>
      </div>
      {/* circle */}
      <div className="absolute left-[34%] top-[10%] z-10">
        <div className="rounded-full border border-gray-500 h-[500px] w-[500px] flex justify-center items-center">
          <div className="rounded-full border border-gray-500 h-[400px] w-[400px]">

          </div>
        </div>
      </div>
      <div className="flex justify-center text-center text-gray-50">

        <div className="mt-32 font-bold text-7xl font-[monospace] z-30">
          <h1>My <span className={`${classes.services__transparent} text-7xl`}>services</span> include<br /> </h1>
          <p>web-development,</p>
          <p className="-ml-16 flex items-center gap-x-5">social paid ads,<span className='text-xs text-left w-[210px]'>hopstic creative solutions for on brand messaging across any platform.</span></p>
          <p className="">digital marketing,</p>
          <p>seo and google ads</p>
          <button className="my-10 p-3 px-6 font-semibold font-[monospace] text-sm border rounded-full">View Services</button>
        </div>
      </div>
    </div>
  )
}

export default Services