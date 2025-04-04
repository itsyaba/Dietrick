import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  Instagram,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "../contact-form";
const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
