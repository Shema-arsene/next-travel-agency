import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href="/" className="relative aspect-square block w-20 h-6">
      <Image fill src="/logo.png" alt="Travel agency" />
    </Link>
  )
}

export default Logo
