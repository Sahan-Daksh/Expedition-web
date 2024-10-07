import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";

import { benefitOne } from "@/components/data";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import CustomizedTimeline from "@/components/Timeline";

// Import type for Metadata
import type { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Expedition",
  description: "Explore the Expedition series and get involved!",
};

export default function Home() {
  return (
    <Container>
      <Hero />
      {/* Uncomment if you want to display the About section */}
      {/* <SectionTitle title="About Expedition">
        <br/>
      </SectionTitle>
      <About /> */}

      {/* Uncomment if you want to display Benefits section */}
      {/* <Benefits data={benefitOne} /> */}

      <SectionTitle title="Timeline">
      Explore our schedule and see what we have planned for the Expedition series!
      </SectionTitle>
      <CustomizedTimeline />
      <SectionTitle title="Contact Us">
        Have questions? Want to get involved? Reach out to us today!
      </SectionTitle>
      <Contact />
      <SectionTitle title="Frequently Asked Questions">
        Answers to Help You Navigate the Expedition Series
      </SectionTitle>

      <Faq />
    </Container>
  );
}
