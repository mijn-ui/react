import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react/components/card"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"

export default function DocsPage(): React.ReactElement {
  return (
    <section className="w-full flex gap-4 max-w-4xl flex-col items-center px-5 text-start md:text-center sm:px-8 md:px-10 justify-center flex-1">
      <h1 className="text-4xl/[1/2] font-bold md:font-extrabold md:text-5xl/[1/2]">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        MijnUI is available in two versions: HTML and Next.js. Choose HTML for
        simple static pages or Next.js for more complex, server-rendered
        applications.
      </p>
      <div className="grid grid-cols-1 gap-6 mt-4 text-left md:grid-cols-2">
        <Link href="docs/next-js">
          <Card className="hover:shadow-md hover:shadow-primary/20 transition relative duration-300 bg-surface border p-3 md:p-5">
            <span className="absolute top-4 right-4 text-2xl md:text-3xl">
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
          <Card className="hover:shadow-md hover:shadow-primary/20 transition duration-300 bg-surface border p-3 md:p-5 relative">
            <span className="absolute top-4 right-4 text-2xl md:text-3xl">
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
