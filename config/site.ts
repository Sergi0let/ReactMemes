export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Memasic Mania",
  description: "Site about mems",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "List",
      href: "/list",
    },
    {
      label: "Table",
      href: "/table",
    },
  ],
  links: {
    github: "https://github.com/Sergi0let",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
}
