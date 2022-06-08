import React, { useEffect } from 'react'
import classes from '../services/services.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Process = () => {

    const [ref, inView] = useInView()
    const animation = useAnimation()
    const textAnimation = useAnimation()

    const textAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    }

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
            })
            textAnimation.start(textAnimate.onscreen)
        }

        if (!inView) {
            animation.start({
                x: '-100vw'
            })
            textAnimation.start(textAnimate.offscreen)
        }
    }, [inView])
    return (
        <div className="h-[100vh]  relative ">
            <div ref={ref} className="py-8">
                <div>
                    <motion.div animate={animation} transition={{ duration: 0.6 }} className="absolute bg-indigo-400 opacity-30 filter bg-blend-luminosity blur-3xl rounded-full w-[50%] h-[100%] -left-60 ">
                    </motion.div>
                    <motion.div animate={animation} transition={{ duration: 1.1 }} className="absolute bg-purple-800 opacity-50 filter  blur-3xl rounded-full w-[40%] h-[100%] -left-32"></motion.div>
                    <motion.div animate={animation} transition={{ duration: 1.5 }} className="absolute bg-red-500 opacity-40 filter bg-blend-luminosity blur-3xl rounded-full w-[20%] h-[100%] -left-32 "></motion.div>
                </div>
                <div className="flex justify-center text-center">
                    <motion.div 
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 1 }}
                    transition={{
                        staggerChildren: 0.2,
                    }}
                     className="mt-36 font-bold text-7xl text-white font-[monospace] z-30">
                         <motion.div variants={textAnimate}>
                        <p>Bespoken solutions,</p>
                        <p className="-ml-16 flex items-center gap-x-5">
                            <>
                                proven <span className={`${classes.services__transparent} text-7xl`}>process</span>.
                            </>
                            <motion.span variants={textAnimate} className='text-xs text-left w-[210px]'>Focused on results, my framework guides outcome for bespoken solutions.</motion.span>
                        </p>
                        <p className="">Define, design, deliver</p>
                        <button className="my-10 p-3 px-6 font-semibold font-[monospace] text-sm border rounded-full">View Process</button>
                         </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Process