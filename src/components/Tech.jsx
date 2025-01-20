import React from 'react'
import { DiAngularSimple, DiCss3, DiDart, DiDreamweaver, DiJava, DiJavascript, DiNodejs, DiPython } from "react-icons/di";
const Tech = () => {
  return (
    <div className='space-y-8  '>

      <h1 className='text-3xl font-bold text-center underline underline-offset-4'>Technologies I use</h1>

      <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>

        <DiJavascript
          size={170}
          title="JavaScript"
          className="hover:scale-110 hover:text-yellow-500 transition-transform duration-300" />

        <DiPython
          size={170}
          title="Python"
          className="transition-all duration-300 hover:scale-110 hover:fill-none hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500 hover:bg-clip-content" />

        <DiCss3 size={170} />
        <DiJava size={170} />
        <DiNodejs size={170} />
        <DiDart size={170} />
        <DiAngularSimple size={170} />
        <DiDreamweaver size={170} />


      </div>

    </div>
  )
}

export default Tech