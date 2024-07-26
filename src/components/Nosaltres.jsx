import Section from "./Section";
import rightQuote from "../assets/right_quote.svg";
import leftQuote from "../assets/left_quote.svg";

const Nosaltres = () => {
  return (
    <Section crosses id="about">
      {/* <div className="px-[20rem] pt-12 flex flex-col gap-20">
        <div className="flex align-center justify-center items-center ">
            <h1 className="h2 font-open">Sobre Nosaltres</h1>
        </div>
        <div>
        <div className="flex justify-start w-full -m-4">
          <img className="relative" height={100} width={100} src={leftQuote} alt="quote"/> 
        </div>
        <p className="body-1 text-justify font-mon text-n-2 italic">Som una agència de disseny web ubicada al Bages, formada per un 
            equip de programadors i dissenyadors professionals. La nostra àmplia 
            experiència en el sector és el que ens permet oferir solucions 
            personalitzades per a empreses de totes les mides i sectors, adaptant-nos 
            a les necessitats específiques de cada una d’elles.
        </p>
        <div className="flex justify-end w-full -m-4">
          <img height={100} width={100} src={rightQuote} alt="quote"/> 
        </div>
        </div>
      </div> */}

      <div className="flex lg:flex-col flex-wrap items-center justify-center  px-12  lg:px-[20rem] py-8 ">
        <div className="pb-20 w-full flex lg:justify-center justify-start ">
          <h1 className="h2 font-open  ">Sobre Nosaltres</h1>
        </div>
        <div class="relative inline-block mx-4">
          <svg class="absolute w-8 h-8 text-gray-400 left-top -top-6 -left-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3H4C2.895 3 2 3.895 2 5V9C2 10.105 2.895 11 4 11H8C9.105 11 10 10.105 10 9V5C10 3.895 9.105 3 8 3ZM8 5V9H4V5H8ZM20 3H16C14.895 3 14 3.895 14 5V9C14 10.105 14.895 11 16 11H20C21.105 11 22 10.105 22 9V5C22 3.895 21.105 3 20 3ZM20 5V9H16V5H20Z" fill="currentColor"/>
          </svg>
          <p className="body-1 text-justify font-mon text-n-2 italic">Som una agència de disseny web ubicada al Bages, formada per un 
            equip de programadors i dissenyadors professionals. La nostra àmplia 
            experiència en el sector és el que ens permet oferir solucions 
            personalitzades per a empreses de totes les mides i sectors, adaptant-nos 
            a les necessitats específiques de cada una d’elles.
          </p>
          <svg class="absolute w-8 h-8 text-gray-400 right-bottom -bottom-6 -right-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 13H20C21.105 13 22 13.895 22 15V19C22 20.105 21.105 21 20 21H16C14.895 21 14 20.105 14 19V15C14 13.895 14.895 13 16 13ZM16 15V19H20V15H16ZM4 13H8C9.105 13 10 13.895 10 15V19C10 20.105 9.105 21 8 21H4C2.895 21 2 20.105 2 19V15C2 13.895 2.895 13 4 13ZM4 15V19H8V15H4Z" fill="currentColor"/>
          </svg>
      </div>
    </div>
    </Section>
  )}

  export default Nosaltres;