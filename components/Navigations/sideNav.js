import React from 'react'

const SideNav = () => {
  return (
        <div className="flex flex-col gap-y-3 text-white font-[monospace] ">
            <button className="p-2 px-5 rounded-full border hover:bg-white hover:text-purple-800 hover:font-semibold">Intro</button>
            <button className="p-2 px-5 rounded-full border hover:bg-white hover:text-purple-800 hover:font-semibold">Services</button>
            <button className="p-2 px-5 rounded-full border hover:bg-white hover:text-purple-800 hover:font-semibold">Solutions</button>
            <button className="p-2 px-5 rounded-full border hover:bg-white hover:text-purple-800 hover:font-semibold">Contact</button>
        </div>
  )
}

export default SideNav