import React from 'react'
import { companyLogos } from '../constants'

function CompanyLogos({className}) {
  return (
    <div className={className}>
        <h5 className='tagline mb-6 text-center text-n-1/50'>Ajudant a crear webs a:</h5>
        <ul className='flex'>
            {companyLogos.map((logo, index) => (
                <li className='flex items-center justify-center flex-1 h-[8.5rem]' key={index}>
                    <img width={134} height={28} src={logo} alt={logo}/>

                </li>
            ))}

        </ul>

    </div>
  )
}

export default CompanyLogos