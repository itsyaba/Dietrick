import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 w-full px-12 py-6 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50 text-black"
    >
      <div className="flex gap-12">
        <Link
          to="#"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          HOME
        </Link>
        <Link
          to="#ABOUT"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          ABOUT
        </Link>
        <Link
          to="#services"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          SERVICES
        </Link>
        <Link
          to="#portfolio"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          PORTFOLIO
        </Link>
        <Link
          to="#contact"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          CONTACT ME
        </Link>
      </div>

      <div className="flex items-center gap-12">
        <span className="text-sm font-medium tracking-wide">
          New York, United States
        </span>
        <span className="text-sm font-medium tracking-wide">
          {new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Asia/Jakarta",
          })}{" "}
          GMT+7
        </span>
      </div>
    </motion.nav>
  );
}
