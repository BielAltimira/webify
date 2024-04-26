import React, { useState } from 'react'
import Button from './Button'
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';



function Form() {
    
    const [formState, setFormState] = useState("loaded");

    function handleFormState(state){
        // loaded
        // sending
        // success
        // error
        setFormState(state);
    }

    // Formik logics
    const formik = useFormik({
        initialValues: {
            email: "",
            assumpte: "",
            missatge: "",
        },

        // Validation
        validationSchema: Yup.object({
            email: Yup.string().email("Correu electrònic invàlid").required("Introdueix un correu electrònic"),
            assumpte: Yup.string().max(70, "Màxim de 70 caràcters").required("Introdueix un assumpte"),
            missatge: Yup.string().max(3000, "Màxim de 3000 caràcters").required("Introdueix un missatge"),
        }),

        // Submit
        onSubmit: (values) => {
            handleFormState("sending")
            emailjs.send("service_jkhhzrd","template_4cowm47",values,"zfwy-9gdLlFQnQY0_")
            .then(res =>{
                return res
            })
            .then(data => {
                console.log(JSON.stringify(data))
                if(data.status < 299){
                    console.log("SUCESS")
                    formik.resetForm()
                    handleFormState("success")
                }
            })
            .catch(error => {
                console.log(JSON.stringify(error))
                handleFormState("error")
            })
        }
  });
    console.log(formik.errors);

  const message = () => {
    switch(formState){
        case "loaded":
            return null;
        case "error":
            return <p className="absolute text-red-500">Hi ha hagut un error.</p>
        case "success":
            return <p className="absolute text-green-500">Missatge enviat correctament!</p>
    }
  }

  if (formState === "sending") {
    return (
        <div className='ml-0 md:ml-24 w-full h-[32rem] md:w-[75%] bg-n-8 p-10 rounded-[1rem] flex items-center justify-center'>
            <div role="status">
                <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
  }
  return (
    <form onSubmit={formik.handleSubmit} className="ml-0 md:ml-24 w-full md:w-[75%] bg-n-8 p-10 rounded-[1rem]">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-open text-white">
                {formik.touched.email && formik.errors.email ? <span className="text-red-500">{formik.errors.email}</span> : 
                "El teu correu electronic"}
            </label>
            <input type="text" id="email" className="border font-mon text-sm rounded-lg block w-full p-2.5 bg-n-5 border-gray-600 placeholder-gray-400 text-white focus:ring-white focus:border-white" placeholder="email@gmail.com" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
        </div>
        <div className="mb-5">
            <label htmlFor="assumpte" className="block mb-2 font-open text-white">
                {formik.touched.assumpte && formik.errors.assumpte? <span className="text-red-500">{formik.errors.assumpte}</span> : 
                "Assumpte"}
            </label>
            <input type="text" id="assumpte" className="border font-mon text-sm rounded-lg block w-full p-2.5 bg-n-5 border-gray-600 placeholder-gray-400 text-white focus:ring-white focus:border-white" placeholder="Asumpte del correu"
                value={formik.values.assumpte}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
        </div>
        <div className='mb-5 mt-5'>
            <label htmlFor="missatge" className="block mb-2 font-open text-white">
                {formik.touched.missatge && formik.errors.missatge ? <span className="text-red-500">{formik.errors.missatge}</span> : 
                "El teu missatge"}
            </label>
            <textarea id="missatge" rows="4" className="block p-2.5 w-full font-mon  rounded-lg border focus:ring-white focus:border-white dark:bg-n-5 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Escriu el teu missatge..."
                value={formik.values.missatge}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}></textarea>
        </div>
    
        <Button white className="w-full mb-6" type="submit">Enviar</Button>
        {message()}
    </form>

  )
}

export default Form
