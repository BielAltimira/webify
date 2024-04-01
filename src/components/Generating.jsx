import React from 'react'
import { loading } from "../assets";

function Generating({className}) {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-4/80 rounded-[1.7rem] ${className || ""} text-base font-mon`}>
        <img className='w-5 h-5 mr-4' src={loading} alt="loading"></img>
        Estem treballant en la teva web...
    </div>
  )
}

export default Generating