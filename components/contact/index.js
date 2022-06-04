import React from 'react'
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="mt-40 text-xl relative">
        <div className="text-gray-50 flex items-center cursor-pointer gap-x-3">
        <BsInstagram />
          <p>yomah_x_twiprasa</p>
        </div>
        <div className="text-gray-50 flex items-center cursor-pointer gap-x-3">
        <BsFacebook />
          <p>Yomahdur Twiprasa</p>
        </div>
        <div className="text-gray-50 flex items-center cursor-pointer gap-x-3">
        <BsWhatsapp />
          <p>+91 7085650634</p>
        </div>

        <div className="flex gap-x-3">
        <button className="my-10 p-3 px-6 hover:bg-gray-50 hover:text-purple-800 font-semibold font-[monospace] text-sm border rounded-full">Intro</button>
        <button className="my-10 p-3 px-6 hover:bg-gray-50 hover:text-purple-800 font-semibold font-[monospace] text-sm border rounded-full">Services</button>
        <button className="my-10 p-3 px-6 hover:bg-gray-50 hover:text-purple-800 font-semibold font-[monospace] text-sm border rounded-full">Process</button>
        </div>
      </div>

     <div className="text-white flex justify-between px-10 -pt-20 w-[90vw]">
            <div></div>
            <div>
              Copyright @ 2022 Rudhamoy
            </div>
            <div>
              rudhamoydebbarma@gmail.com
            </div>
          </div>
    </div>
  )
}

export default Contact