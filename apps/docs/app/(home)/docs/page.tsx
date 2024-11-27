import Link from "next/link"
import {
  Card as MijnUICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react-card"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa"
import { cn } from "@mijn-ui/react-utilities/shared"

interface CardProps {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  disabled?: boolean
}

function Card({ href, icon, title, description, disabled }: CardProps) {
  return (
    <Link href={href}>
      <MijnUICard
        className={cn(
          "relative border bg-surface p-3 transition duration-300 hover:shadow-md hover:shadow-primary/20 md:p-5",
          disabled ? "pointer-events-none opacity-50" : "",
        )}
      >
        <span className="absolute right-4 top-4 text-2xl md:text-3xl">
          {icon}
        </span>
        <CardHeader className="relative pb-1 md:pb-3">
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </MijnUICard>
    </Link>
  )
}

export default function DocsPage(): React.ReactElement {
  return (
    <section className="flex w-full max-w-4xl flex-1 flex-col justify-center gap-4 px-5 py-14 text-start sm:items-center sm:px-8 sm:text-center md:px-10">
      <h1 className="text-4xl/[1/2] font-bold md:text-5xl/[1/2] md:font-extrabold">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        MijnUI is currently available in two versions: HTML and Next.js. Choose
        HTML for simple static pages or Next.js for more complex,
        server-rendered applications.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 md:grid-cols-3">
        <Card
          href="docs/next-js"
          icon={<RiNextjsFill />}
          title="Next.js"
          description="Next.js 15 and React.js 19 version"
        />
        <Card
          href="/docs/tailwind"
          icon={<RiTailwindCssFill />}
          title="TailwindCss"
          description="Tailwind Css for HTML projects"
        />
        <Card
          href="/docs/laraval"
          icon={<FaLaravel />}
          title="Laraval"
          description="Components for your Laraval Application"
          disabled
        />
      </div>
    </section>
  )
}
