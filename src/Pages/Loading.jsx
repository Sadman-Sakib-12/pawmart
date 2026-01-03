import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className = "w-80 md:w-96 h-[480px] bg-base-200 rounded-3xl animate-pulse" >
      <div className="h-64 bg-gray-300 rounded-t-3xl"></div>

      <div className="p-6 space-y-4">
        <div className="h-6 w-24 bg-gray-300 rounded"></div>
        <div className="h-5 w-full bg-gray-300 rounded"></div>
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>

        <div className="h-12 w-full bg-gray-300 rounded-2xl mt-6"></div>
      </div>
    </div >
    )
}

export default Loading