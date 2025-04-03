import { motion } from "framer-motion";

export default function WorkExperienceSection() {
  const experiences = [
    {
      year: "2021 - Current",
      title: "Senior UI/UX Designer at",
      company: "Vektora Studio",
      description:
        "Work on various UI/UX related projects across various business sectors.",
    },
    {
      year: "2020 - 2021",
      title: "Webflow Developer at",
      company: "Hvolen Studio",
      description:
        "Take part in various web development related projects in various business sectors.",
    },
    {
      year: "2019 - 2020",
      title: "Graphic Designer at",
      company: "Future Fast Indonesia",
      description:
        "Work on various graphic design projects across various business sectors.",
    },
  ];

  return (
    <div className="relative w-full px-4 py-16 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex items-baseline justify-center gap-24">
        <h1 className="text-7xl font-medium text-gray-400">03</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-7xl font-bold leading-tight">
            Work
            <br />
            <span className="font-peptit font-medium">Experience</span>
          </h2>
        </motion.div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col md:flex-row min-h-[50vh] max-w-[90%] mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`self-${
              index === 0 ? "start" : index === 1 ? "center" : "end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="md:col-span-1">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-sm">
                {exp.year}
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <h4 className="text-xl font-bold mb-3">{exp.company}</h4>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
