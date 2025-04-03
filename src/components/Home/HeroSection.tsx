import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dietrick from "@/assets/image03.jpg";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  const socialLinks = [
    { href: "https://instagram.com", Icon: Instagram },
    { href: "https://facebook.com", Icon: Facebook },
    { href: "https://linkedin.com", Icon: Linkedin },
    { href: "https://twitter.com", Icon: Twitter },
  ];
  return (
    <div className="relative min-h-screen w-full px-12 pt-32 pb-12 overflow-hidden">
      {/* Gradient decoration */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl  transform rotate-45" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 text-gray-950"
        >
          <div className="ml-">
            <div className="text-[180px] leading-[0.9] tracking-tight ">
              <span className="font-bold relative z-10">
                Dietrick
                <motion.div
                  className="absolute top-10 -right-24 "
                  whileInView={{ scale: 1.02 }}
                >
                  <img
                    src={dietrick}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl rotate-12"
                  />
                  {/* <div className="absolute w-full flex items-center gap-3 bg-gray-300 left-0 right-0 ">
                    <span className="w-3 h-3 bg-purple-600 rounded-full" />
                    <p className="text-lg ">
                      Let's solve problems and create new ones
                    </p>
                  </div> */}
                </motion.div>
              </span>
              <br />
              <span className="font-peptit italic font-medium my-64  leading-[1.2] tracking-tight">
                Cyrus Grand
              </span>
              <span className="text-purple-600">.</span>
            </div>
          </div>

          <div className="flex items-start  justify-between gap-16 pl-4 flex-row ">
            {/* Social links */}
            <div className="flex gap-6 pl-4">
              {socialLinks.map(({ href, Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:border-black/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-8 max-w-2xl mt-2">
              <p className="text-lg text-black/80 leading-relaxed">
                Hello, I'm Dietrick Cyrus, With over 5 years of experience
                building successful sales pipelines at startups and enterprises,
                an expert in cold outreach and email marketing.
              </p>

              <Button className="w-fit px-8 py-6 text-base rounded-lg bg-sky-500 hover:bg-black/90 transition-colors text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
