"use client"

import { Link } from "@heroui/link"
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar"
import { link as linkStyles } from "@heroui/theme"
import clsx from "clsx"
import Image from "next/image"
import NextLink from "next/link"
import { useState } from "react"

import { GithubIcon } from "./icons"
import { ThemeSwitch } from "./ThemeSwitch"

import { siteConfig } from "@/config/site"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = siteConfig.navItems.slice(1)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeroUINavbar
      className="-px-"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="ReactMemes "
              height={42}
              priority={true}
              src="/logo/meme_doge_dog.png"
              width={42}
            />
            <p className="font-bold hidden xs:block ml-2 text-inherit">
              ReactMemes
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href ?? "#"}
                size="lg"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}

export { Header }
