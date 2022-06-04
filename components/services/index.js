import React from 'react';
import classes from './services.module.css';

const Services = () => {
  return (
    <div className="h-[100vh] flex justify-center text-center text-gray-50   relative overflow-hidden">
        {/* Gradient color */}
        <>
                    <div className="absolute bg-indigo-400 opacity-30 filter bg-blend-luminosity blur-3xl rounded-full w-[65%] h-[100%] -right-60 -top-10">
                    </div>
                    <div className="absolute bg-purple-800 opacity-50 filter  blur-3xl rounded-full w-[60%] h-[90%] -top-32"></div>
                    <div className="absolute bg-red-500 opacity-40 filter bg-blend-luminosity blur-3xl rounded-full w-[30%] h-[60%] right-32 -top-32"></div>
                </>
                {/* circle */}
                <div className="absolute left-[34%] top-[10%]">
                    <div className="rounded-full border border-gray-500 h-[460px] w-[460px] flex justify-center items-center">
                    <div className="rounded-full border border-gray-500 h-[380px] w-[380px]">

                    </div>
                    </div>
                </div>
        <div className="mt-32 font-bold text-7xl font-[monospace] ">
            <h1>My <span className={`${classes.services__transparent} text-7xl`}>services</span> include<br /> </h1>
                <p>web-development,</p>
                <p className="-ml-16 flex items-center gap-x-5">social paid ads,<span className='text-xs text-left w-[210px]'>hopstic creative solutions for on brand messaging across any platform.</span></p>
                <p className="">digital marketing,</p>
                <p>seo and google ads</p>
                <button className="my-10 p-3 px-6 font-semibold font-[monospace] text-sm border rounded-full">View Services</button>
        </div>
    </div>
  )
}

export default Services