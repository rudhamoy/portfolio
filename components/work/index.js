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
                        <p>List of dev</p>
                    </div>
                ) : (
                    <div>
                        <p>list of marketing</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Work