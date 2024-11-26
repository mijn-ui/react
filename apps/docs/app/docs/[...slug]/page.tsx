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
import {
  InstallationTabs,
  InstallationTabsContent,
} from "@/mdx-components/installation-tabs"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="flex w-full flex-col items-baseline justify-between gap-3 sm:flex-row">
        <DocsTitle className="md:text-4xl md:font-extrabold">
          {page.data.title}
        </DocsTitle>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          {page.data.docs && (
            <Link
              target="_blank"
              className="flex items-center gap-1 text-sm text-main-text/80 underline hover:text-primary"
              href={page.data.docs}
            >
              <LuExternalLink />
              Docs
            </Link>
          )}
          {page.data.apiReference && (
            <Link
              target="_blank"
              className="flex items-center gap-1 text-sm text-main-text/80 underline hover:text-primary"
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
            InstallationTabs,
            InstallationTabsContent,
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
