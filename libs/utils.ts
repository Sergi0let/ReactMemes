export const isValidJpgUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url)

    return (
      parsed.protocol.startsWith("http") &&
      parsed.pathname.toLowerCase().endsWith(".jpg")
    )
  } catch {
    return false
  }
}
