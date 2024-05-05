import Image from "next/image";
import Hero from "./component/sections/Hero";
import ScreenAbout from "./component/sections/ScreenAbout";
import Clients from "./component/sections/Clients";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import Team from "./component/sections/Team";
import Industries from "./component/sections/Industries";
import Experties from "./component/sections/Experties";
import OurWork from "./component/sections/OurWork";
import HowWeDo from "./component/sections/HowWeDo";
import Testimonials from "./component/sections/Testimonials";
import Footer from "./component/sections/Footer";
import Numbers from "./component/sections/Numbers";

export default function Home() {
  return (
    <>

      <Hero />
      <ScreenAbout />
      <Clients />
      <Numbers />
      <Experties />
      <Team />
      <OurWork />
      <WhyChooseUs />
      <HowWeDo />
      <Industries />
      {/* <Testimonials/> */}
      <Footer />
    </>
  )
}
