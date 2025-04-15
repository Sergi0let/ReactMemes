import { Link } from "@heroui/link"
import { button as buttonStyles } from "@heroui/theme"

import { GithubIcon } from "@/components/icons"
import { subtitle, title } from "@/components/primitives"
import { siteConfig } from "@/config/site"

const Home = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Craft the&nbsp;</span>
        <span className={title({ color: "violet" })}>perfect&nbsp;</span>
        <br />
        <span className={title()}>meme collection</span>
        <div className={subtitle({ class: "mt-4" })}>
          Preserving humanity’s only cultural achievement — one meme at a time.
        </div>
      </div>

      <div className="flex gap-3">
        <span className={buttonStyles({ variant: "bordered", radius: "full" })}>
          Saw a code
        </span>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.codeLink}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  )
}

export default Home
