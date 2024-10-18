import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { source } from "@/app/source"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import defaultMdxComponents from "fumadocs-ui/mdx"
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page"

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="text-4xl pt-12 font-extrabold">
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="mb-0 text-lg">
        {page.data.description}
      </DocsDescription>
      <DocsBody className="prose">
        <MDX components={{ ...defaultMdxComponents, Tabs, Tab }} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
