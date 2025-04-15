import links from "@/config/links"

export const loadMemesFromApi = async () => {
  const res = await fetch(links.env.api.memes)

  if (!res.ok) throw new Error("API error")

  return res.json()
}
