import { Hero } from "./components/Home/HeroSection";
import { Navbar } from "./components/Home/Navbar";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  Download,
  Instagram,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import ContactForm from "./components/contact-form";

import dietrick from "@/assets/image03.jpg";
import ServicesSection from "./components/Home/ServiceSection";
import WorkExperienceSection from "./components/Home/experience";
import { TestimonialsSection } from "./components/Home/TestimonialSection";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins text-black">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorkExperienceSection />
      <section id="about" className="py-24 md:py-32  ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                About <span className="">Me</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className=" mb-8 leading-relaxed">
                Hello, I'm Dietrick Cyrus, With over 5 years of experience
                building successful sales pipelines at startups and enterprises,
                an expert in cold outreach and email marketing.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-full rounded-lg overflow-hidden "
            >
              <img
                src={dietrick}
                alt="Portrait photo"
                className="object-cover"
              />
            </motion.div>

            <div className="col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <p className=" mb-6 leading-relaxed">
                  I specialize in simplifying complex financial systems for
                  small to mid-sized businesses. My approach focuses on
                  streamlining processes, optimizing budgets, and implementing
                  strategic financial planning to help businesses scale
                  efficiently. Whether working with multimillion-dollar budgets
                  or navigating the financial intricacies of growing
                  organizations, I provide clear, actionable solutions that
                  drive sustainable success. My expertise spans both nonprofit
                  organizations and corporate consulting, allowing me to bring a
                  well-rounded perspective to every project. vel.
                </p>
                <p className=" mb-8 leading-relaxed">
                  Fluent in both English and Spanish, I excel at bridging
                  communication gaps across diverse teams and markets, ensuring
                  seamless collaboration and clarity in financial
                  decision-making. My cross-sector experience enables me to
                  adapt to different business needs, offering tailored
                  strategies that align with unique industry challenges. By
                  combining financial acumen with a practical, results-driven
                  approach, I help businesses build strong financial
                  foundations, empowering them to focus on growth and long-term
                  success.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-black mb-2">
                    <AnimatedCounter from={0} to={15} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={100} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>

                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={500} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Connection</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={2} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Languages</p>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="outline"
                    className="bg-gray-300 text-blue-900  border-none"
                    size="icon"
                    asChild
                  >
                    <Link
                      to="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-8 w-8" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="outline"
                    className="bg-gray-300 text-blue-900  border-none"
                    size="icon"
                    asChild
                  >
                    <Link to="mailto:hello@example.com" aria-label="Email">
                      <Mail className="h-8 w-8" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="outline"
                    className="bg-gray-300 text-blue-900  border-none"
                    size="icon"
                    asChild
                  >
                    <Link
                      to="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      <Download className="h-8 w-8" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Featured <span className="">Projects</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                A selection of my recent work showcasing my skills.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageSrc}
                link={project.link}
                githubLink={project.githubLink}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Button
                asChild
                variant="outline"
                className="bg-gray-300 text-blue-900  border-none group"
              >
                <Link to="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">
                Get in <span className="">Touch</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have a project in mind or want to discuss potential
                collaborations?
                <br />
                I'd love to hear from you!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="h-8 w-8 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-700">+1(646) 359-8503</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-8 w-8 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-700">Carolinabonaparte@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="h-8 w-8 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="text-gray-700">linkedin.com/in/username</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="h-5 w-5 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">instagram</h4>
                    <p className="text-gray-700">instagram.com/username</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-700 mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="flex gap-4">
                <Button asChild className="group">
                  <Link to="mailto:hello@example.com">
                    Send Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-300 text-blue-900  border-none"
                >
                  <Link
                    to="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-200 p-8 rounded-lg shadow-4xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
