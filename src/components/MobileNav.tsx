import { motion } from "motion/react"
import React from "react"
import { NavLink } from "@/lib/types"
import Link from "next/link"
import { XIcon } from "lucide-react"

const navLinks: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
  { label: "Bookings", href: "/bookings" },
]

const MobileNav = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-10 bg-black/80 w-full h-screen text-white"
    >
      <div>
        <ul className="mt-12 flex flex-col items-start justify-center">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full py-2">
              <Link
                href={link.href}
                className="font-poppins text-xl block w-full cursor-pointer hover:text-primary duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer hover:text-primary transition duration-300"
          >
            <XIcon className="h-8 w-8" />
          </button>
          <Link
            href="/login"
            className="cursor-pointer hover:text-primary duration-300"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="cursor-pointer font-semibold px-4 py-2 rounded-md border hover:border-transparent hover:text-white 
          hover:bg-yellow transition duration-300"
          >
            Sign Up
          </Link>
        </ul>
      </div>
    </motion.nav>
  )
}

export default MobileNav
