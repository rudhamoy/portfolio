import React from 'react'
import classes from '../services/services.module.css'

const Process = () => {
    return (
        <div className="h-[100vh] flex justify-center text-center relative overflow-hidden">
            <>
                <div className="absolute bg-indigo-400 opacity-30 filter bg-blend-luminosity blur-3xl rounded-full w-[50%] h-[100%] -left-60 ">
                </div>
                <div className="absolute bg-purple-800 opacity-50 filter  blur-3xl rounded-full w-[40%] h-[100%] -left-32"></div>
                <div className="absolute bg-red-500 opacity-40 filter bg-blend-luminosity blur-3xl rounded-full w-[20%] h-[100%] -left-32 "></div>
            </>
            <div className="mt-36 font-bold text-7xl text-white font-[monospace] ">
                <p>Bespoken solutions,</p>
                <p className="-ml-16 flex items-center gap-x-5">
                    <>
                    proven <span className={`${classes.services__transparent} text-7xl`}>process</span>.
                    </>
                    <span className='text-xs text-left w-[210px]'>Focused on results, my framework guides outcome for bespoken solutions.</span>
                    </p>
                <p className="">Define, design, deliver</p>
                <button className="my-10 p-3 px-6 font-semibold font-[monospace] text-sm border rounded-full">View Process</button>
            </div>
        </div>
    )
}

export default Process