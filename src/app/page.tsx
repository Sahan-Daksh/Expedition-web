import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import Faq from "@/components/Faq";
import Countdown from "@/components/Countdown";
import ScrollToTop from "@/components/ScrollToTop";
import StartupBanner from "@/components/StartupBanner";

import { benefitOne} from "@/components/data";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import { Cta } from "@/components/Cta";
import Phases from "@/components/TimelineNew";
export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Cta />
      <Timeline />
      <Phases/>
      <StartupBanner />
      
      {/* <SectionTitle title="About Expedition">
        <br/>
      </SectionTitle>
      <About /> */}

      {/* <Benefits data={benefitOne} /> */}


      
      
      
      <Faq />
      <Contact/>


      
      
    </Container>
  );
}
