import React from 'react'
import Section from './Section'
import Heading from './Heading'


import { check } from "../assets";
import { contactContent} from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import webify from "../assets/webify-symbol-white.svg";
import Form from './Form';

function Contact() {
  return (
        <Section crosses id="contacte">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 font-open mb-4 md:mb-8">
            Contacta amb nosaltres 👋
            
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {contactContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={item.icon} width={24} height={24} alt="check" />
                  <h6 className=" font-open body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className=" select-none font-mon body-1 mt-3 text-n-2">{item.text} <span className='hidden'>464546546464</span></p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full rounded-[2rem] flex items-center justify-center'>
            <Form/>
        </div>

        
      </div>
    </Section>

  )
}

export default Contact