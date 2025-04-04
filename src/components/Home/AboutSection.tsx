import { AnimatedCounter } from "@/components/animated-counter";
import dietrick from "@/assets/image03.jpg";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Download, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
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

        <div className="md:grid grid-cols-1 md:grid-cols-3 gap-24  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative h-full w-full rounded-lg overflow-hidden "
          >
            <img src={dietrick} alt="Portrait photo" className="object-cover" />
          </motion.div>

          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-6xl md:text-2xl font-bold my-6">
                My Journey
              </h3>
              <p className=" mb-6 leading-relaxed">
                I specialize in simplifying complex financial systems for small
                to mid-sized businesses. My approach focuses on streamlining
                processes, optimizing budgets, and implementing strategic
                financial planning to help businesses scale efficiently. Whether
                working with multimillion-dollar budgets or navigating the
                financial intricacies of growing organizations, I provide clear,
                actionable solutions that drive sustainable success. My
                expertise spans both nonprofit organizations and corporate
                consulting, allowing me to bring a well-rounded perspective to
                every project. vel.
              </p>
              <p className=" mb-8 leading-relaxed">
                Fluent in both English and Spanish, I excel at bridging
                communication gaps across diverse teams and markets, ensuring
                seamless collaboration and clarity in financial decision-making.
                My cross-sector experience enables me to adapt to different
                business needs, offering tailored strategies that align with
                unique industry challenges. By combining financial acumen with a
                practical, results-driven approach, I help businesses build
                strong financial foundations, empowering them to focus on growth
                and long-term success.
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

            <div className="flex gap-4 ml-2">
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
  );
};

export default AboutSection;
