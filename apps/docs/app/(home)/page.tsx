import Link from "next/link"
import { buttonStyles } from "@mijn-ui/react-button"
import { cn } from "@mijn-ui/react-utilities/shared"

export default function HomePage() {
  return (
    <section className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-4 px-5 text-start sm:px-8 md:px-10 md:text-center">
      <h1 className="bg-gradient-to-br from-main-text to-neutral-text/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold lg:text-5xl/[1.2]">
        Reusable components for clean, responsive interfaces.
      </h1>
      <p className="w-full text-lg font-medium text-neutral-text md:w-3/4">
        Built with Tailwind and Radix UI for both Next.js and HTML projects.
      </p>

      <div className="flex w-full items-center justify-start gap-2 md:justify-center">
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
          href={"/blocks"}
        >
          Blocks
        </Link>
      </div>
    </section>
  )
}
