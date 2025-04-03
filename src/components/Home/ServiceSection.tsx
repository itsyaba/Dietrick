import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Lead Generation",
      description:
        "Tap into our expertise to fill your Sales Pipeline with Valuable Prospects eager to engage with your offerings.",
    },
    {
      id: "02",
      title: "Outbound Email Marketing",
      description:
        "Expertly crafted, targeted email campaigns that resonate with your audience and generate High-Quality Leads.",
    },
    {
      id: "03",
      title: "SDR For Hire",
      description:
        "Top-tier Sales Development Representatives to boost your Sales Team's effectiveness.",
    },
    {
      id: "04",
      title: "Cold Calling",
      description:
        "Got a List of Dream Clients? or Database of Leads, but don't know where to start?",
    },
  ];

  return (
    <section className="relative w-full mx-auto px-4 py-16 overflow-hidden">
      {/* Corner gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black to-transparent opacity-10 -translate-y-1/4 translate-x-1/4 rotate-45 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600 to-transparent opacity-20 translate-y-1/4 -translate-x-1/4 rotate-45 rounded-full"></div>

      <div className="">
        <div className="w-full flex items-baseline justify-center gap-24 ">
          <h1 className="text-7xl font-medium text-gray-400">02</h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "circIn" }}
            className="mb-16"
          >
            <h2 className="text-7xl font-bold leading-tight">
              How can I
              <br />
              <span className="font-peptit font-medium">help you?</span>
            </h2>
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-start justify-end md:flex-row ">
          <div className="w-9/12 "></div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="pl-4 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="md:col-span-1 text-gray-400">
                  ({service.id})
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-gray-600 text-sm mb-2">
                    {service.description}
                  </p>
                  <Link to="#" className="text-sm font-medium hover:underline">
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
