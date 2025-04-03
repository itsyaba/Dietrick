import { motion, useInView } from "framer-motion";
import { StarIcon } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  text: string;
  author: {
    name: string;
    company: string;
    image: string;
    role: string;
  };
  position: string;
}

const testimonials: Testimonial[] = [
  {
    text: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and creative problem-solving skills made our project a success.",
    author: {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&q=80&fit=crop",
    },
    position: "top-[10%] left-[15%] -rotate-12",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam aut repellat quod quae repellendus consectetur quia deleniti nam eos, corrupti fugit in culpa consequuntur.",
    author: {
      name: "My name is Jeff",
      company: "Amazone",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&q=80&fit=crop",
    },
    position: "top-[10%] right-[15%] rotate-12",
  },
  {
    text: "Working with this developer was a pleasure. They understood our vision immediately and transformed it into a beautiful, functional website that exceeded our expectations.",
    author: {
      name: "Michael Chen",
      company: "Innovate Solutions",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&q=80&fit=crop",
    },
    position: "bottom-[10%] left-[15%] rotate-[16deg]",
  },
  {
    text: "Not only is their technical skill impressive, but their communication and project management made the entire process smooth and stress-free. I highly recommend their services.",
    author: {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Design Collective",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&q=80&fit=crop",
    },
    position: "bottom-[10%] right-[15%] -rotate-[16deg]",
  },
];

const getPositionStyles = (index: number, isInView: boolean) => {
  if (!isInView) {
    return {
      x: "-50%",
      y: "-50%",
      scale: 0.9,
      opacity: 0.3,
      zIndex: 0,
      transition: { duration: 0.8, delay: index * 0.1 },
    };
  }

  switch (index) {
    case 0:
      return { x: "-140%", y: "-120%", rotate: -12 };
    case 1:
      return { x: "20%", y: "-140%", rotate: 12 };
    case 2:
      return { x: "-130%", y: "20%", rotate: 16 };
    case 3:
      return { x: "40%", y: "5%", rotate: -16 };
    default:
      return {};
  }
};

export function TestimonialsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const starsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0%,rgba(0,0,0,1)_100%)]" /> */}

      <div
        ref={containerRef}
        className="hidden md:block relative w-11/12 mx-auto h-screen "
      >
        <motion.div
          className="central-content absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center z-10"
          //   initial="hidden"
          //   animate="visible"
          variants={titleVariants}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
            <span className="text-white/80">Testimonials</span>
          </div>
          <h2
            className="testimonials-title text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70"
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.2 }}
          >
            What Our Clients Say
          </h2>
          <motion.div
            className="stars flex justify-center gap-2 text-4xl"
            variants={starsVariants}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-yellow-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                ★
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="testimonials-container relative h-full  w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card absolute top-1/2 left-1/2 max-w-[400px] bg-zinc-900/80 backdrop-blur-sm p-6 rounded-3xl"
              initial={false}
              animate={{
                ...getPositionStyles(index, isInView),
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: index * 0.1,
                },
              }}
              whileHover={{
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.2 },
              }}
            >
              <p className="text-sm text-white/90 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-white/90">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full px-4">
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <div className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
            <span className="text-white/80">Testimonials</span>
          </div>
          <h2 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70">
            What Our Clients Say
          </h2>
          <motion.div
            className="stars flex justify-center gap-2 text-4xl"
            variants={starsVariants}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-yellow-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <StarIcon className="w-14 h-14 " fill="yellow" />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card bg-zinc-900/80 backdrop-blur-sm p-6 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <p className="text-sm text-white/90 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm text-white/90">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonial.author.role} at {testimonial.author.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
