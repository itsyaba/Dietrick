import { Hero } from "./components/Home/HeroSection";
import { Navbar } from "./components/Home/Navbar";
import ServicesSection from "./components/Home/ServiceSection";
// import WorkExperienceSection from "./components/Home/experience";
import { TestimonialsSection } from "./components/Home/TestimonialSection";
import AboutSection from "./components/Home/AboutSection";
import ProjectSection from "./components/Home/ProjectSection";
import ContactSection from "./components/Home/ContactSection";
import WhyChooseUsSection from "./components/Home/WhyChooseUsSection";
import Tape from "./components/Tape";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins text-black overflow-clip">
      <Navbar />
      <Hero />
      <Tape />
      <ServicesSection />
      {/* <WorkExperienceSection /> */}
      <WhyChooseUsSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

export default App;
