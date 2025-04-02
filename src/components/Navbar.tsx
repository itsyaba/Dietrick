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
          to="/"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          HOME
        </Link>
        <Link
          to="/works"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          WORKS
        </Link>
        <Link
          to="/bookmarks"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          BOOKMARKS
        </Link>
        <Link
          to="/design-gallery"
          className="text-sm font-medium tracking-wide hover:text-black/70 transition-colors"
        >
          DESIGN GALLERY
        </Link>
      </div>

      <div className="flex items-center gap-12">
        {/* <span className="text-sm font-medium tracking-wide">
          Addis Ababa, Ethiopia
        </span> */}
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
