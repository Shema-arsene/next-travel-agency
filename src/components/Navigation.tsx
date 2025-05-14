import { NavLink } from "@/lib/types"
import Link from "next/link"
import React from "react"

const navLinks: NavLink[] = [
  { label: "Destinations", href: "/destinations" },
  { label: "Hotels", href: "/hotels" },
  { label: "Flights", href: "/flights" },
  { label: "Bookings", href: "/bookings" },
]

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-5 items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="cursor-pointer hover:text-primary duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
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
    </nav>
  )
}

export default Navigation
