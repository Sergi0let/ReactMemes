"use client"

import React, { createContext, useEffect } from "react"

import { useLocalStorage } from "@/hooks"
import { loadMemesFromApi } from "@/services/memes"
import { MemeType } from "@/types"

interface MemeContextType {
  memes: MemeType[]
  updateMeme: (updatedMeme: MemeType) => void
}

const MemeContext = createContext<MemeContextType | undefined>(undefined)

export const MemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [memes, setMemes] = useLocalStorage<MemeType[]>("memes", [])

  useEffect(() => {
    const loadMemes = async () => {
      const storedMemes = localStorage.getItem("memes")

      if (!storedMemes || JSON.parse(storedMemes).length === 0) {
        try {
          const data = await loadMemesFromApi()

          setMemes(data)
        } catch (error) {
          console.warn("Failed to fetch memes from API", error)
        }
      }
    }

    loadMemes()
  }, [setMemes])

  const updateMeme = (updatedMeme: MemeType) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === updatedMeme.id ? updatedMeme : meme,
    )

    setMemes(updatedMemes)
  }

  return (
    <MemeContext.Provider value={{ memes, updateMeme }}>
      {children}
    </MemeContext.Provider>
  )
}

export { MemeContext }
