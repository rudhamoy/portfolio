import React from 'react'
import Navigation from '../Navigations'

const Home = () => {
    return (
        <>
            <div className="h-[100vh] bg-zinc-800 relative overflow-hidden">
                <Navigation />
                <>
                    <div className="absolute bg-indigo-400 opacity-30 filter blur-3xl rounded-full w-[65%] h-[100%] -left-60 -bottom-10">
                    </div>
                    <div className="absolute bg-purple-800 opacity-50 filter blur-3xl rounded-full w-[60%] h-[90%] -bottom-32"></div>
                    <div className="absolute bg-red-500 opacity-40 filter blur-3xl rounded-full w-[30%] h-[60%] -left-24 -bottom-32"></div>
                </>
                <div className="flex justify-center text-gray-50 text-7xl font-semibold font-[monospace]">
                    <div className="text-center">
                    <p className="">Elevate Brands </p>
                    <p>to captivate people</p>
                    <p className="text-lg py-4">Strategic design and marekting, Connect your brand with your audiences to get results</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home