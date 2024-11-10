/* eslint-disable-next-line */
// @ts-nocheck
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ComponentPreview from "@/app/components/mdx/component-preview"
import Alert from "@/app/components/mdx/mdx-alert"
import TWComponentPreview from "@/app/components/mdx/tailwind-component-preview"
import { source } from "@/app/source"
import { File, Files, Folder } from "fumadocs-ui/components/files"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import defaultMdxComponents from "fumadocs-ui/mdx"
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="text-4xl md:mt-[calc(var(--navbar-height)-1rem)] font-extrabold">
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="mb-0 text-lg">
        {page.data.description}
      </DocsDescription>
      <hr />
      <DocsBody className="prose">
        <MDX
          components={{
            ...defaultMdxComponents,
            Steps,
            Step,
            Tabs,
            Tab,
            File,
            Files,
            Folder,
            Alert,
            ComponentPreview,
            TWComponentPreview,
          }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
