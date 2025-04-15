import links from "@/config/links"

export async function GET() {
  try {
    const response = await fetch(links.env.databaseUrl)

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const data = await response.json()

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error(error)

    return new Response(JSON.stringify({ error: "Failed to fetch memes" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}
