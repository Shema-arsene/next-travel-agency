"use client"
import React, { useState } from "react"
import Wrapper from "./Wrapper"
import Logo from "./Logo"
import MobileMenuToggle from "./MobileMenuToggle"
import Navigation from "./Navigation"
import { AnimatePresence } from "motion/react"
import MobileNav from "./MobileNav"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="py-6">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <MobileMenuToggle onToggle={handleToggle} />
        </div>
      </Wrapper>
      <AnimatePresence>
        {isOpen && <MobileNav onClose={handleToggle} />}
      </AnimatePresence>
    </header>
  )
}

export default Header
