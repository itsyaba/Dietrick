import { Hero } from "./components/Home/HeroSection";
import { Navbar } from "./components/Home/Navbar";
import ServicesSection from "./components/Home/ServiceSection";
import WorkExperienceSection from "./components/Home/experience";
import { TestimonialsSection } from "./components/Home/TestimonialSection";
import AboutSection from "./components/Home/AboutSection";
import ProjectSection from "./components/Home/ProjectSection";
import ContactSection from "./components/Home/ContactSection";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins text-black overflow-clip">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorkExperienceSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

export default App;
