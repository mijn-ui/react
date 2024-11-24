import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react-card"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"

export default function DocsPage(): React.ReactElement {
  return (
    <section className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-4 px-5 text-start sm:px-8 md:px-10 md:text-center">
      <h1 className="text-4xl/[1/2] font-bold md:text-5xl/[1/2] md:font-extrabold">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        MijnUI is available in two versions: HTML and Next.js. Choose HTML for
        simple static pages or Next.js for more complex, server-rendered
        applications.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
        <Link href="docs/next-js">
          <Card className="relative border bg-surface p-3 transition duration-300 hover:shadow-md hover:shadow-primary/20 md:p-5">
            <span className="absolute right-4 top-4 text-2xl md:text-3xl">
              <RiNextjsFill />
            </span>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Next.js 15 and React.js 19 version
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/tailwind">
          <Card className="relative border bg-surface p-3 transition duration-300 hover:shadow-md hover:shadow-primary/20 md:p-5">
            <span className="absolute right-4 top-4 text-2xl md:text-3xl">
              <RiTailwindCssFill />
            </span>
            <CardHeader className="relative">
              <CardTitle className="text-xl md:text-2xl">TailwindCss</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Tailwind Css for HTML projects</CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  )
}
