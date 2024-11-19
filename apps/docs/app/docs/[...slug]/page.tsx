import Link from "next/link"
import { notFound } from "next/navigation"
import { source } from "@/app/source"
import ComponentPreview from "@/mdx-components/component-preview"
import Alert from "@/mdx-components/mdx-alert"
import TWComponentPreview from "@/mdx-components/tailwind-component-preview"
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
import { LuExternalLink } from "react-icons/lu"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="w-full flex items-baseline gap-3 justify-between">
        <DocsTitle className="md:text-4xl md:font-extrabold">
          {page.data.title}
        </DocsTitle>

        <div className="flex items-center gap-4">
          {page.data.docs && (
            <Link
              target="_blank"
              className="underline text-sm hover:text-primary flex items-center gap-1"
              href={page.data.docs}
            >
              <LuExternalLink />
              Docs
            </Link>
          )}
          {page.data.apiReference && (
            <Link
              target="_blank"
              className="text-sm flex hover:text-primary items-center gap-1 underline"
              href={page.data.apiReference}
            >
              <LuExternalLink />
              Api Reference
            </Link>
          )}
        </div>
      </div>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <hr />
      <DocsBody>
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
  }
}
