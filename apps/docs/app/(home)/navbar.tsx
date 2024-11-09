import React from "react"
import Link from "next/link"
import Logo from "../components/icons/logo"
import ThemeToggler from "../components/theme-toggler"
import { Badge } from "@mijn-ui/components/badge"
import { LuGithub } from "react-icons/lu"

const Navbar = () => {
  return (
    <header className="fixed flex items-center inset-x-0 top-0 bg-transparent z-50 justify-between h-[var(--navbar-height)] w-full backdrop-blur-md">
      <nav className="flex w-full max-w-screen-xl items-center justify-between px-5 py-2 mx-auto">
        <div className="flex items-center gap-3">
          <Link href={"/"} className="font-bold  flex items-center gap-2">
            <Logo className="fill-fd-foreground size-5 items-center" />
            MijnUI
          </Link>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/20">
            v0.0.1
          </Badge>
        </div>

        <div className="flex items-center">
          <Link
            className="text-sm hidden sm:block mr-2 text-neutral-text hover:text-secondary-text"
            href={"/docs"}
          >
            Documentation
          </Link>

          <Link
            className={
              "text-neutral-text flex items-center justify-center size-9 transition duration-200 hover:text-secondary-text sm:size-10"
            }
            target="_blank"
            href={"https://github.com/HTLA380/MijnUI"}
          >
            <LuGithub size={18} />
          </Link>

          <ThemeToggler />
        </div>
      </nav>

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 100% at 100% 10%, rgba(239, 138, 94, 0.1), rgba(255, 255, 255, 0))",
        }}
      ></div>
    </header>
  )
}

export default Navbar
