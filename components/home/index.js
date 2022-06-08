import React, { useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion';
import { ref, useInView } from 'react-intersection-observer'

const Home = () => {
    const [ref, inView] = useInView()
    const animation = useAnimation()
    const animationText = useAnimation()

    // const gradientAnimate = {
    //     offscreen: { x: '-100vw',},
    //     onscreen: {
    //         x: 0,
    //         transition: {
    //             // type: "spring",
    //             // bounce: 0.4,
    //             duration: 1.5
    //         }
    //     }
    // }

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
            animationText.start(textAnimate.onscreen)
            animation.start({
                x: 0
            })
        }
        if (!inView) {
            animationText.start(textAnimate.offscreen)
            animation.start({
                x: "-100vw"
            })
        }

    }, [inView])

    return (
        <div className="h-[100%]  overflow-hidden relative ">
            <div ref={ref} className="py-8">
                {/* GRadient color */}
                <div>
                    <motion.div animate={animation} transition={{ duration: 0.6 }} className="absolute bg-indigo-400 opacity-5 filter bg-blend-luminosity blur-3xl rounded-full w-[65%] h-[100%] -left-60 -bottom-10">
                    </motion.div>
                    <motion.div animate={animation} transition={{ duration: 1.1 }} className="absolute bg-purple-800 opacity-50 filter  blur-3xl rounded-full w-[60%] h-[90%] -left-32 -bottom-32"></motion.div>
                    <motion.div animate={animation} transition={{ duration: 1.5 }} className="absolute bg-red-500 opacity-40 filter bg-blend-luminosity blur-3xl rounded-full w-[30%] h-[60%] -left-24 -bottom-32"></motion.div>
                </div>
                {/* circle */}
                <div className="flex justify-center absolute right-[4%] top-[26%] z-30">
                    <div className="z-30 flex justify-center h-[300px] w-[300px] rounded-full border-2 border-gray-500 my-4 relative">
                        <p className="absolute left-5 bottom-2 text-sm font-semibold text-gray-100 flex flex-col items-center">
                            <span className="p-2 w-2 rounded-full bg-purple-900 "></span>Strategy
                        </p>
                        <div className="z-30 flex justify-center h-[230px] w-[230px] rounded-full border-2 border-gray-500 my-4 relative">
                            <p className="absolute right-10 text-sm font-semibold text-gray-100 flex flex-col items-center">
                                <span className="p-2 w-2 rounded-full bg-purple-900"></span>
                                Website
                            </p>
                            <div className=" flex justify-center items-center h-[140px] w-[140px] rounded-full border-2 border-gray-500 my-4 relative">
                                <p className="absolute -right-1 -bottom-2 text-sm font-semibold text-gray-100 flex flex-col items-center">
                                    <span className="p-2 w-2 rounded-full bg-purple-900"></span>Marketing
                                </p>
                                <p className="font-semibold font-[monospace] text-gray-100">Success</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copy Writing */}
                <div
                    className="flex justify-center mt-[18%] text-gray-50 text-7xl font-semibold font-[monospace] z-50">
                    <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 1 }}
                        transition={{
                            staggerChildren: 0.2,
                        }}
                        className="text-center">
                        <motion.div variants={textAnimate}>
                            <p className="">Elevate Brands </p>
                            <p>to captivate people</p>
                        </motion.div>
                        <motion.div variants={textAnimate} className="flex justify-center">
                            <p className="text-lg py-4 w-[470px] text-center">Strategic design and marekting, Connect your brand with your audiences to get results</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home