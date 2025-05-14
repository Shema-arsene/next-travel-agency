import { Menu } from "lucide-react"
import React from "react"

const MobileMenuToggle = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden hover:text-yellow transition duration-300 cursor-pointer"
    >
      <Menu className="h-8 w-8" />
    </button>
  )
}

export default MobileMenuToggle
