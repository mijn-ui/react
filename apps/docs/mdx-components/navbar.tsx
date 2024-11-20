"use client"

import React, { useState } from "react"
import Link from "next/link"
import { TopRightRadialGradient } from "@/app/components/decorators/gradient-bg"
import Logo from "@/app/components/logo"
import ThemeToggler from "@/app/components/theme-toggler"
import ClickAwayListener from "@/app/utils/click-away-listener"
import { Badge } from "@mijn-ui/react/components/badge"
import { Button } from "@mijn-ui/react/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@mijn-ui/react/components/collapsible"
import { Separator } from "@mijn-ui/react/components/separator"
import { useSearchContext } from "fumadocs-ui/provider"
import { LuExternalLink, LuGithub, LuMenu, LuSearch } from "react-icons/lu"

const PAGES = [
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
]

const GITHUB_URL = "https://github.com/mijn-ui/react"

const Navbar = () => {
  const { setOpenSearch } = useSearchContext()
  const [open, setOpen] = useState(false)

  const renderPages = PAGES.map((page) => (
    <Link
      key={page.title}
      className="text-sm text-neutral-text hover:text-secondary-text"
      href={page.href}
    >
      {page.title}
    </Link>
  ))

  return (
    <header className="sticky border-b inset-x-0 top-0 bg-transparent z-50 md:flex flex-col justify-center items-center h-[var(--navbar-height)] w-full backdrop-blur-md">
      <nav className="flex w-full items-center justify-between px-5 py-2">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="font-bold  flex items-center gap-2">
            <Logo className="fill-fd-foreground size-5 items-center" />
            MijnUI
          </Link>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
            v0.0.1
          </Badge>

          <div className="hidden md:flex gap-4">{renderPages}</div>
        </div>

        {/* Desktop Buttons */}
        <div className="md:flex hidden items-center gap-2">
          <Button
            onClick={() => setOpenSearch(true)}
            color={"accent"}
            variant={"outline"}
            size={"sm"}
            className="gap-2"
          >
            <LuSearch />
            <span className="text-neutral-text inline-block">Search...</span>
            <div className="inline-flex border rounded-full ml-4 gap-1 h-5 px-2 py-px">
              <kbd className="text-[0.625rem]">Ctrl+</kbd>
              <kbd className="text-[0.625rem]">K</kbd>
            </div>
          </Button>

          <Button color={"accent"} size={"sm"} className="border px-2" asChild>
            <Link target="_blank" href={GITHUB_URL}>
              <LuGithub size={18} />
            </Link>
          </Button>

          <ThemeToggler />
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpenSearch(true)}
            className="text-neutral-text inline-flex items-center justify-center size-8 transition duration-200 hover:text-secondary-text"
          >
            <LuSearch />
          </button>

          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Collapsible open={open} onOpenChange={setOpen}>
              <CollapsibleTrigger className="text-neutral-text flex items-center justify-center size-8 transition duration-200 hover:text-secondary-text">
                <LuMenu className="text-lg" />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden transition-[height] data-[state=closed]:animate-collapsible-collapse data-[state=open]:animate-collapsible-expand absolute inset-x-0 bg-surface top-[calc(var(--navbar-height)] mt-2 text-sm">
                <div className="flex w-full flex-col relative justify-between items-start space-y-2 px-4 py-2">
                  <div className="flex w-fit flex-col gap-2">{renderPages}</div>
                  <Separator />

                  <div className="flex items-center justify-between w-full">
                    <Link
                      className="inline-flex gap-2 items-center text-neutral-text hover:text-secondary-text"
                      target="_blank"
                      href={GITHUB_URL}
                    >
                      Github <LuExternalLink />
                    </Link>
                    <ThemeToggler />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ClickAwayListener>
        </div>
      </nav>

      <TopRightRadialGradient />
    </header>
  )
}

export default Navbar
