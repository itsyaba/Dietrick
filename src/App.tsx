// import WorkExperienceSection from "./components/experience";
import { Hero } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBar } from "@/components/skill-bar";
import { AnimatedCounter } from "@/components/animated-counter";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Link } from "react-router-dom";
import ContactForm from "./components/contact-form";

import dietrick from "@/assets/image03.jpg";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins text-black">
      <Navbar />
      <Hero />
      {/* <WorkExperienceSection /> */}
      <section id="about" className="py-24 md:py-32  ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                About <span className="">Me</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className=" mb-8 leading-relaxed">
                I'm a passionate developer and designer with a focus on creating
                beautiful, functional, and accessible web experiences. With a
                background in both design and development, I bridge the gap
                between aesthetics and functionality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                <p className=" mb-6 leading-relaxed">
                  With over 5 years of experience in web development and design,
                  I've worked on a variety of projects from small business
                  websites to large-scale applications. My approach combines
                  technical expertise with creative problem-solving to deliver
                  solutions that not only look great but also perform
                  exceptionally well.
                </p>
                <p className=" mb-8 leading-relaxed">
                  I'm passionate about creating accessible, user-friendly
                  interfaces that provide seamless experiences across all
                  devices. When I'm not coding, you can find me exploring new
                  design trends, contributing to open-source projects, or
                  experimenting with new technologies.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-black mb-2">
                    <AnimatedCounter from={0} to={5} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={50} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={30} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold  mb-2">
                    <AnimatedCounter from={0} to={15} duration={2} />+
                  </h4>
                  <p className="text-sm text-gray-600">Awards Won</p>
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
                      to="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-8 w-8" />
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

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-gray-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Work <span className="">Experience</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                My professional journey in the tech industry, showcasing my
                roles and responsibilities at various companies.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Button
                asChild
                variant="outline"
                className="bg-gray-300 text-blue-900  border-none group"
              >
                <Link
                  to="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Download Full Resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                My <span className="">Skills</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                I've developed expertise in various technologies and design
                principles, allowing me to create comprehensive solutions for
                web projects.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>
            <div className="space-y-6">
              {skills.slice(4, 8).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.1 * (index + 5)}
                />
              ))}
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Featured <span className="">Projects</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                A selection of my recent work showcasing my skills in design,
                development, and animation.
              </p>
            </motion.div>

            <ProjectFilter />
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
              viewport={{ once: true, margin: "-100px" }}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Client <span className="">Testimonials</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                What clients and colleagues have to say about working with me.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 text-white p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6 flex-grow">
                  "An exceptional developer who consistently delivers
                  high-quality work. Their attention to detail and creative
                  problem-solving skills made our project a success."
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">CEO, TechStart Inc.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 text-white p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6 flex-grow">
                  "Working with this developer was a pleasure. They understood
                  our vision immediately and transformed it into a beautiful,
                  functional website that exceeded our expectations."
                </p>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-400">
                    Marketing Director, Innovate Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 text-white p-8 rounded-lg shadow-sm border"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6 flex-grow">
                  "Not only is their technical skill impressive, but their
                  communication and project management made the entire process
                  smooth and stress-free. I highly recommend their services."
                </p>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-gray-400">
                    Founder, Design Collective
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Get in <span className="">Touch</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have a project in mind or want to discuss potential
                collaborations? I'd love to hear from you!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="h-8 w-8 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-700">hello@example.com</p>
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
                  <Github className="h-5 w-5 mr-3 mt-1 " />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-gray-700">github.com/username</p>
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 text-white p-8 rounded-lg shadow-sm border"
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
