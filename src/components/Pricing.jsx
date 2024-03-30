import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import logo from "../assets/webify-symbol-white.svg"



const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="serveis">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={logo}
            className="relative z-1"
            width={225}
            height={225}
            alt="Sphere"
          />
        </div>

        <Heading
          tag="Comença ja amb webify"
          title="Els nostres serveis"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;