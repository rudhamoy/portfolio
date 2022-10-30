import React from 'react'

const Index = () => {
  return (
    <div className="flex justify-between w-full items-center sm:py-10 px-2 sm:px-12">
      {/* logo */}
      <div>
        <h1 className="text-gray-50 text-3xl font-[monospace]">Rudhamoy</h1>
      </div>
      {/* menu */}
      <div>
        <button className="bg-gray-50 text-gray-800 p-2 rounded-full text-3xl">
          =
        </button>
      </div>
    </div>
  )
}

export default Index