import Banner from "@/components/pages/homepage/Banner";
import Section from "@/components/pages/homepage/Section";
import About from "@/components/pages/homepage/About";
import Awards from "@/components/pages/homepage/Awards";

import Services from "@/components/pages/homepage/Services";
import Specialties from "@/components/pages/homepage/Specialties";
import Doctors from "@/components/pages/homepage/Doctors";
import Testimonials from "@/components/pages/homepage/Testimonials";
import Blogs from "@/components/pages/homepage/Blogs";
import Emergency from "@/components/pages/homepage/Emergency";


export default function Home() {
  return (
    <>
      <Banner />
      <Section />
      <About />
      <Awards />
      <Services />
      <Specialties />
      <Doctors />
      <Testimonials />
      <Blogs />
      <Emergency />
    </>
  );
}
