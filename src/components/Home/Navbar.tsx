import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 w-full px-6 md:px-12 py-4 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50 text-black"
    >
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <div className="flex flex-col gap-4">
              <Link to="#" className="text-lg font-medium">
                HOME
              </Link>
              <Link to="#ABOUT" className="text-lg font-medium">
                ABOUT
              </Link>
              <Link to="#services" className="text-lg font-medium">
                SERVICES
              </Link>
              <Link to="#portfolio" className="text-lg font-medium">
                PORTFOLIO
              </Link>
              <Link to="#contact" className="text-lg font-medium">
                CONTACT ME
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12">
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

      {/* Right section */}
      <div className="hidden md:flex items-center gap-12">
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
