import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link: string;
  githubLink?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  tags = [], // Provide default empty array
  imageSrc,
  link,
  githubLink,
  delay = 0,
}: ProjectCardProps) {
  console.log("tags", tags, link, githubLink, description);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="group bg-gray-50 rounded-lg overflow-hidden shadow-4xl  h-full flex flex-col"
      >
        <div className="relative  w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title || "Project"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          {/* <h3 className="text-xl font-bold mb-2">
            {title || "Untitled Project"}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow">
            {description || "No description available"}
          </p> */}
          {/* <div className="flex gap-2 mt-auto">
            {link && (
              <Button asChild size="sm" className="flex-1">
                <Link
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
