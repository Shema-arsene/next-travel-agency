import React from "react"
import { cn } from "@/lib/utils"
import { BaseProps } from "@/lib/types"

const Wrapper = ({ children, className }: BaseProps) => {
  return <div className={cn("wrapper", className)}>{children}</div>
}

export default Wrapper
