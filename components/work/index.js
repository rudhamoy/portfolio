import React, { useState } from 'react'

const Work = () => {
    const [showDev, setShowDev] = useState(false)
    const [showMarketing, setShowMarketing] = useState(false)

    return (
        <div className="flex justify-center items-center">
            <div className="mt-36">
                <div className='flex gap-x-5'>
                    <button onClick={() => setShowMarketing(true)} className='p-1 px-3 rounded-full border text-sm sm:text-base bg-white text-black'>Social Media Marketing</button>
                    <button onClick={() => setShowDev(true)} className='p-1 px-3 rounded-full border text-sm sm:text-base'>Web Development</button>
                </div>
                <div className='mt-10'>
                    {showDev === true ? (
                        <div>
                            <div>
                                <img src="rajarshi.jpeg" alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-x-5">
                            <div>
                                <p className="text-sm font-bold my-3">Rajarshi College, Tripura</p>
                                <div className="border p-2">
                                    <img className="w-[180px]" src="rajarshi.jpeg" alt="" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold my-3">Rentmeroom, Startup based on Tripura</p>
                                <div className="border w-[190px] p-2">
                                    <img className="w-[180px]" src="rentmeroom1.jpeg" alt="" />
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Work