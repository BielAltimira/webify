import React from 'react'
import Button from './Button'
// import { useFormik } from "formik";
// import * as Yup from "yup";

function Form() {
  return (


<form className="ml-0 md:ml-24 w-full md:w-[75%] bg-n-6 p-10 rounded-[1rem]">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 font-open dark:text-white">El teu email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 font-mon text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder="email@gmail.com" required />
  </div>
  <div children="mb-5">
    <label htmlFor="base-input" className="block mb-2 font-open text-gray-900 dark:text-white">Assumpte</label>
    <input type="text" id="base-input" className="bg-gray-50 border font-mon border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white" placeholder='Asumpte del correu'></input>
  </div>
  <div className='mb-5 mt-5'>
    <label htmlFor="message" className="block mb-2 font-open text-gray-900 dark:text-white">El teu missatge</label>
    <textarea id="message" rows="4" className="block p-2.5 w-full font-mon text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" required placeholder="Escriu el teu missatge..."></textarea>
  </div>
  
  {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button> */}
  <div className='text-black'>

    <Button white className="w-full mb-6">Enviar</Button>
  </div>
</form>

  )
}

export default Form