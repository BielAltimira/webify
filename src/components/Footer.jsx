import React from 'react'
import Section from './Section'
import Logo from "../assets/webify-grey.png"

function Footer() {
  return (
    <Section crosses className="!px-0 !py-10">
        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col text-open'>
            <p className='text-n-4 lg:block'>©{new Date().getFullYear()}. Tots els drets reservats.</p>
            <img src={Logo} width={190} height={40} alt="Webify"></img>
        </div>
    </Section>
  )
}

export default Footer