import { curve, heroBackground, robot } from "../assets";
import background2 from "../assets/background2.jpg";
import Spline from '@splinetool/react-spline';
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import StarGrid from "./design/StarGrid";
import mockup from "../assets/mockup.png";
import mockupMobile from "../assets/mockup_mobile.jpg";

const Hero = () => {
    const parallaxRef = useRef();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="inici"
    >

      <StarGrid/>
      <div className="container relative" ref={parallaxRef} >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Impulsa el teu negoci ara <br/>
            i digitalitza't amb {` `}
            <span className="inline-block relative">
              Webify.{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Millora la presència en línia del teu negoci. Webs professionals personalitzades i atractives per a empreses. 
          </p>
          <Button className="" href="#contacte" white>
            Començar
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative bg-black rounded-[1rem]">

              <div className="aspect-[33/40] rounded-[1rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">

                    {/* <Spline className="hidden md:block" scene="https://draft.spline.design/XaZU-9o0QjqdWD0c/scene.splinecode" />
                    <Spline className="md:hidden block" scene="https://draft.spline.design/ssVqsCZaBWMYrEzr/scene.splinecode" /> */}
                    <img src={mockup} className="hidden md:block scale-[1.7]"></img>
                    <img src={mockupMobile} className="md:hidden block h-full object-cover scale-[1.7]"></img>
                {/* <img
                  src={background2}

                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="hero"
                /> */}
                <ScrollParallax enableOnTouchDevice={false} zIndex={99} isAbsolutelyPositioned>
                   <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-6 md:w-[31rem] md:-translate-x-1/2"/>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                    <ul className="absolute hidden -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        {heroIcons.map((icon, index) => (
                            <li className="p-5" key={index}>
                                <img src={icon} height={25} width={24} alt={icon}></img>
                            </li>
                        ))}

                    </ul>
                </ScrollParallax>
                {/* <ScrollParallax isAbsolutelyPositioned>
                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="⭐⭐⭐⭐⭐"/>
                </ScrollParallax> */}

              </div>
            </div>

            <Gradient />
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}
          {/* <BackgroundCircles/> */}

        </div>
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/> */}
    </div>
    <BottomLine/>
    </Section>
  );
};

export default Hero;