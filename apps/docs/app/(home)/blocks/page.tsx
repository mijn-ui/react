"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import "./glow-effect.css"
import KanbanShowcase from "./showcase/kanban-showcase"
import { Card } from "@mijn-ui/react-card"
import { cn } from "@mijn-ui/react-utilities/shared"
import { FaScrewdriverWrench } from "react-icons/fa6"

const Blocks = () => {
  // card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card_glow")
      Array.from(cards).forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        card.setAttribute("style", `--mouse-x: ${x}px; --mouse-y: ${y}px;`)
      })
    }

    const cardsContainer = document.getElementById("cards")
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <article className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-6 px-4 py-10 md:px-8 md:py-12">
      <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
        Blocks
      </h1>
      <hr />
      <div className="not-prose">
        <div
          className="grid w-full grid-cols-1 sm:p-2 md:gap-2 lg:grid-cols-2 xl:grid-cols-3"
          id="cards"
        >
          <LinkCard href="/blocks/calendar-full" label="CalendarFull">
            <Image
              src="/blocks/calendar-full.svg"
              width={200}
              height={200}
              alt="calendar-full"
              className="size-full"
            />
          </LinkCard>
          <LinkCard
            href="/blocks/kanban-column"
            cardContentClass="p-9 pb-8"
            label="KanBanColumn"
          >
            <KanbanShowcase />
          </LinkCard>
          <LinkCard href="#" label="ScreenState">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-neutral-text/80">
                <FaScrewdriverWrench />
                Inprogress...
              </p>
            </div>
          </LinkCard>
          <LinkCard href="#" label="Sidebar">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-neutral-text/80">
                <FaScrewdriverWrench />
                Inprogress...
              </p>
            </div>
          </LinkCard>
          <LinkCard href="#" label="DataTable">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-neutral-text/80">
                <FaScrewdriverWrench />
                Inprogress...
              </p>
            </div>
          </LinkCard>
          <LinkCard href="#" label="GanttChart">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-neutral-text/80">
                <FaScrewdriverWrench />
                Inprogress...
              </p>
            </div>
          </LinkCard>
        </div>
      </div>
    </article>
  )
}

type LinkCardProps = {
  href: string
  label: string
  cardContentClass?: string
  containerClass?: string
  children: React.ReactNode
}

const LinkCard = ({
  href,
  label,
  children,
  cardContentClass,
  containerClass,
}: LinkCardProps) => {
  return (
    <Link href={href} className={cn("relative col-span-1", containerClass)}>
      <Card
        className={
          "card_glow relative flex min-h-72 w-full items-center justify-center border bg-main [mask:radial-gradient(75%_75%_at_50%,rgb(0,0,0)_60%,rgba(0,0,0,0)_100%)] sm:aspect-video sm:size-full"
        }
        id="card"
      >
        <div
          className={cn(
            "card_glow_content pointer-events-none p-10",
            cardContentClass,
          )}
        >
          {children}
        </div>
      </Card>
      <div className="absolute left-0 top-0 p-2.5 sm:p-4">
        <p className="bg-gradient-to-br from-main-text to-neutral-text bg-clip-text text-sm text-transparent sm:text-sm">
          {label}
        </p>
      </div>
    </Link>
  )
}

export default Blocks
