import { useContext } from "react"

import { MemeContext } from "@/context/MemeContext"

const useMemes = () => {
  const context = useContext(MemeContext)

  if (!context) {
    throw new Error("useMemes must be used within a MemeProvider")
  }

  return context
}

export { useMemes }
