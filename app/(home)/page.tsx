import Link from "next/link"
import { buttonStyles } from "@/mijn-ui/components/button"
import { cn } from "@/mijn-ui/utils"

export default function HomePage() {
  return (
    <section className="flex w-full gap-4 max-w-4xl flex-col items-center px-5 text-start md:text-center sm:px-8 md:px-10 justify-center h-full">
      <h1 className="bg-gradient-to-br from-main-text to-neutral-text/70 bg-clip-text font-bold tracking-tight text-transparent text-3xl/[1.2] sm:text-4xl/[1.2] sm:font-extrabold lg:text-5xl/[1.2]">
        Reusable components for clean, responsive interfaces.
      </h1>
      <p className="w-full md:w-3/4 font-medium text-neutral-text text-lg">
        Built with Tailwind and Radix UI for both React and HTML projects.
      </p>

      <div className="flex items-center justify-start md:justify-center w-full gap-2">
        <Link
          className={cn(
            buttonStyles({ size: "sm", className: "text-xs md:text-sm" }),
          )}
          href={"/docs"}
        >
          Getting Started
        </Link>
        <Link
          className={cn(
            buttonStyles({
              size: "sm",
              color: "secondary",
              className: "text-xs md:text-sm",
            }),
          )}
          href={"/docs/accordion"}
        >
          Components
        </Link>
      </div>
    </section>
  )
}
