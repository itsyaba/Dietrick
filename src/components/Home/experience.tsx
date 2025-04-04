import { motion } from "framer-motion";

export default function WorkExperienceSection() {
  const experiences = [
    {
      id: 0,
      year: "2021 - Current",
      title: "Senior UI/UX Designer at",
      company: "Vektora Studio",
      description:
        "Work on various UI/UX related projects across various business sectors.",
    },
    {
      id: 1,

      year: "2020 - 2021",
      title: "Web flow Developer at",
      company: "Hvolen Studio",
      description:
        "Take part in various web development related projects in various business sectors.",
    },
    {
      id: 2,

      year: "2019 - 2020",
      title: "Graphic Designer at",
      company: "Future Fast",
      description:
        "Work on various graphic design projects across various business sectors.",
    },
  ];

  return (
    <div className="relative w-full px-4 py-16 overflow-hidden">
      {/* Section Header */}
      <div className="w-full flex items-start md:items-baseline justify-center md:gap-24 flex-col md:flex-row">
        <h1 className="text-7xl font-medium text-gray-400">03</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold leading-tight">
            Work
            <br />
            <span className="font-peptit font-medium">Experience</span>
          </h2>
        </motion.div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-2 min-h-[50vh] max-w-[90%] mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={` w-full md:w-auto ${
              exp.id === 0
                ? "self-start"
                : exp.id === 1
                ? "self-center"
                : "self-end"
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
