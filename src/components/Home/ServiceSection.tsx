import { motion } from "framer-motion";
// import img form "@/assets/"
import lead from "@/assets/lead.avif";
import email from "@/assets/email.avif";
import teams from "@/assets/teamss.avif";
import calling from "@/assets/call.avif";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Lead Generation",
      description:
        "Tap into our expertise to fill your Sales Pipeline with Valuable Prospects eager to engage with your offerings.",
      image: lead,
    },
    {
      id: "02",
      title: "Outbound Email Marketing",
      description:
        "Expertly crafted, targeted email campaigns that resonate with your audience and generate High-Quality Leads.",
      image: email,
    },
    {
      id: "03",
      title: "SDR For Hire",
      description:
        "Top-tier Sales Development Representatives to boost your Sales Team's effectiveness.",
      image: teams,
    },
    {
      id: "04",
      title: "Cold Calling",
      description:
        "Got a List of Dream Clients? or Database of Leads, but don't know where to start?",
      image: calling,
    },
  ];

  return (
    <section className="relative w-full mx-auto px-4 py-16 overflow-hidden">
      {/* Corner gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black to-transparent opacity-10 -translate-y-1/4 translate-x-1/4 rotate-45 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600 to-transparent opacity-20 translate-y-1/4 -translate-x-1/4 rotate-45 rounded-full"></div>

      <div className="">
        <div className="w-full flex items-start md:items-baseline justify-center md:gap-24 flex-col md:flex-row">
          <h1 className="text-7xl font-medium text-gray-400">02</h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backInOut" }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              How can I
              <br />
              <span className="font-peptit font-medium">help you?</span>
            </h2>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto ">
          {/* <div className="w-9/12 "></div> */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="pl-4  flex items-center justify-between gap-16 md:gap-36 flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={` ${index % 2 && "md:order-2"}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-[8rem] rotate-12"
                  />
                </div>
                <div className="">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
