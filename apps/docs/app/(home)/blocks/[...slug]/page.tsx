import { notFound } from "next/navigation"
import { blocks } from "@/lib/source"
import ComponentPreview from "@/mdx-components/component-preview"
import Alert from "@/mdx-components/mdx-alert"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import defaultMdxComponents from "fumadocs-ui/mdx"

export default async function Blocks(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = blocks.getPage(params.slug)

  if (!page) notFound()

  const MDX = page.data.body

  return (
    <article className="mx-auto flex w-full flex-1 flex-col gap-6 px-4 py-10 md:px-8 md:py-12 max-w-[1120px]">
      <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
        {page.data.title}
      </h1>
      <hr />
      <div className="prose">
        <MDX
          components={{
            ...defaultMdxComponents,
            Tabs,
            Tab,
            ComponentPreview,
            Alert,
          }}
        />
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  return blocks.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = blocks.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
