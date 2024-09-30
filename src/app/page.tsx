import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";

import { benefitOne} from "@/components/data";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle title="About Expedition">
        <br/>
      </SectionTitle>
      <About /> */}

      {/* <Benefits data={benefitOne} /> */}


      <SectionTitle title="Contact Us">
      Have questions? Want to get involved? Reach out to us today!
      </SectionTitle>
      <Contact/>
      <SectionTitle title="Frequently Asked Questions">
      Answers to Help You Navigate the Expedition Series
      </SectionTitle>


      <Faq />
      
    </Container>
  );
}
