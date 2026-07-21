import React from 'react'
import { DiCss3, DiJavascript, DiLaravel, DiNodejs, DiPython, DiReact } from "react-icons/di";
const Tech = () => {
  return (
    <div >

      <h1 className='text-4xl text-gray-800 font-bold text-center underline underline-offset-4'>Technologies I use</h1>

      <div className='grid grid-cols-4 gap-y-9 my-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>

        <DiReact size={170}
          title="React"
          className="hover:scale-125 hover:text-blue-50 transition-transform duration-300" />

        <DiJavascript
          size={170}
          title="JavaScript"
          className="hover:scale-125 hover:text-yellow-500 transition-transform duration-300" />


        <DiNodejs
          size={170}
          title="Nodejs"
          className="hover:scale-125  hover:text-green-300 transition-transform duration-300" />



        <DiCss3
          size={170}
          title='CSS3'
          className='animate-bounce text-blue-500 bg-white' />


        <DiPython
          size={170}
          title='python' />

        <DiLaravel
          size={170}
          title='Laravel'
          className="hover:scale-125 hover:text-red-500 transition-transform duration-300" />
      </div>

    </div>
  )
}

export default Tech