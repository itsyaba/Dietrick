import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryItems = [
  {
    id: "success",
    title: "Proven Success",
    description:
      "$4.5M+ in new business generated across industries: SaaS, Self-Protection, Marketing Agencies, Consulting Firms, E-commerce, and Content Creators.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "email-marketing",
    title: "Expert Email Marketing",
    description:
      "Data-driven, personalized campaigns that drive measurable results. Helped teams go from $0 to $100k in less than 6 weeks.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "tools",
    title: "Flexible Engagement",
    description:
      "Full-service or collaborative options using industry-leading tools like Apollo, Instantly.ai, and Lemlist.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "global-reach",
    title: "Global Expansion",
    description:
      "Break into APAC and LATAM markets with ease using our tested international growth playbook.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function WhyWorkWithUs() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen  px-12 py-24">
      <div className="w-full flex items-start md:items-baseline justify-center md:gap-24 flex-col md:flex-row">
        <h1 className="text-7xl font-medium text-gray-400">03</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold leading-tight">
            Why
            <br />
            <span className="font-peptit font-medium">Work with Us</span>
          </h2>
        </motion.div>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="md:flex gap-6 grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ flex: 1, y: 20 }}
              animate={{
                flex: hoveredItem === item.id ? 3 : 1,
                transition: { duration: 0.4 },
              }}
              whileInView={{ opacity: 1, y: 0 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.div
                className={`relative h-[500px] rounded-lg overflow-hidden bg-gray-50  ${
                  hoveredItem === item.id ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {hoveredItem !== item.id && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg brightness-75"
                  />
                )}
                <AnimatePresence>
                  {hoveredItem === item.id ? (
                    <div className="flex h-full">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 p-8 flex flex-col justify-center"
                      >
                        <motion.h2
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="text-2xl text-black font-medium mb-4"
                        >
                          {item.title}
                        </motion.h2>
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-black leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex-1"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div
                      className="absolute bottom-0 left-0 p-6 flex items-end justify-center w-full h-full "
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-white text-4xl font-semibold ">
                        {item.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
