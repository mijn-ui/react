"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities"
import { UnstyledProps } from "@mijn-ui/react-core"
import { EllipsisIcon } from "@mijn-ui/shared-icons"
import { paginationStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                              PaginationContext                             */
/* -------------------------------------------------------------------------- */

type PaginationContextType = {
  styles: ReturnType<typeof paginationStyles>
  paginationRange: number[]
  currentPage: number
  prevEllipsisActive: boolean
  nextEllipsisActive: boolean
  setPage: (page: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
} & UnstyledProps

const [PaginationProvider, usePaginationContext] =
  createContext<PaginationContextType>({
    name: "PaginationContext",
    strict: true,
    errorMessage:
      "usePaginationContext: `context` is undefined. Seems you forgot to wrap component within <Pagination />",
  })

/* -------------------------------------------------------------------------- */
/*                             usePagination Hook                            */
/* -------------------------------------------------------------------------- */

type usePaginationProps = {
  totalPages: number
  itemsPerPage: number
  currentPage: number
}

const usePaginationRange = ({
  totalPages,
  itemsPerPage,
  currentPage,
}: usePaginationProps) => {
  const totalPageCount = Math.ceil(totalPages / itemsPerPage)
  const visiblePages = 3

  if (totalPageCount <= visiblePages) {
    return {
      range: Array.from({ length: totalPageCount }, (_, i) => i + 1),
      prevEllipsisActive: false,
      nextEllipsisActive: false,
    }
  }

  if (currentPage <= 2) {
    return {
      range: [1, 2, 3],
      prevEllipsisActive: false,
      nextEllipsisActive: totalPageCount > 3,
    }
  }

  if (currentPage >= totalPageCount - 1) {
    return {
      range: [totalPageCount - 2, totalPageCount - 1, totalPageCount],
      prevEllipsisActive: totalPageCount > 3,
      nextEllipsisActive: false,
    }
  }

  const leftBound = currentPage - 1
  const rightBound = currentPage + 1

  const range = Array.from(
    { length: rightBound - leftBound + 1 },
    (_, i) => i + leftBound,
  )

  return {
    range,
    prevEllipsisActive: leftBound > 1,
    nextEllipsisActive: rightBound < totalPageCount,
  }
}

/* -------------------------------------------------------------------------- */
/*                               PaginationHook                               */
/* -------------------------------------------------------------------------- */
const usePaginationStyles = (unstyledOverride?: boolean) => {
  const context = usePaginationContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                 Pagination                                 */
/* -------------------------------------------------------------------------- */

type PaginationProps = {
  totalPages: number
  itemsPerPage: number
  children: React.ReactNode
  currentPage?: number // Controlled state
  onChangePage?: (page: number) => void // Callback for controlled state
} & UnstyledProps

const Pagination: React.FC<PaginationProps> = ({
  unstyled = false,
  totalPages,
  itemsPerPage,
  children,
  currentPage: propsCurrentPage,
  onChangePage,
}) => {
  const [internalCurrentPage, setInternalCurrentPage] =
    React.useState<number>(1)

  const isControlled = propsCurrentPage !== undefined
  const currentPage = isControlled ? propsCurrentPage : internalCurrentPage

  const paginationRange = usePaginationRange({
    currentPage,
    itemsPerPage,
    totalPages,
  })

  const setPage = (page: number) => {
    if (isControlled && onChangePage) {
      onChangePage(page)
    } else {
      setInternalCurrentPage(page)
    }
  }

  const goToPreviousPage = () => setPage(Math.max(currentPage - 1, 1))

  const goToNextPage = () =>
    setPage(Math.min(currentPage + 1, Math.ceil(totalPages / itemsPerPage)))

  React.useEffect(() => {
    if (!isControlled && propsCurrentPage !== undefined) {
      setInternalCurrentPage(propsCurrentPage)
    }
  }, [propsCurrentPage, isControlled])

  const styles = paginationStyles()

  return (
    <PaginationProvider
      value={{
        unstyled,
        styles,
        paginationRange: paginationRange.range,
        prevEllipsisActive: paginationRange.prevEllipsisActive,
        nextEllipsisActive: paginationRange.nextEllipsisActive,
        currentPage,
        setPage,
        goToPreviousPage,
        goToNextPage,
      }}
    >
      {children}
    </PaginationProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                              PaginationContent                             */
/* -------------------------------------------------------------------------- */

type PaginationContentProps = React.ComponentPropsWithRef<"nav"> & UnstyledProps

const PaginationContent = ({
  className,
  unstyled,
  ...props
}: PaginationContentProps) => {
  const { content } = usePaginationStyles(unstyled)

  return <nav className={content({ className })} {...props} />
}

type PaginationListProps = React.ComponentProps<"ul"> & UnstyledProps

/* -------------------------------------------------------------------------- */
/*                               PaginationList                               */
/* -------------------------------------------------------------------------- */

const PaginationList = ({
  className,
  unstyled,
  ...props
}: PaginationListProps) => {
  const { currentPage, setPage, paginationRange } = usePaginationContext()
  const { list, item } = usePaginationStyles(unstyled)

  return (
    <ul className={list({ className })} {...props}>
      {paginationRange.map((page, index) => (
        <li key={index} onClick={() => setPage(page)}>
          <button className={item({ active: currentPage === page })}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  )
}

/* -------------------------------------------------------------------------- */
/*                          PaginationPreviousButton                          */
/* -------------------------------------------------------------------------- */

type PaginationPreviousButtonProps = React.ComponentProps<"button"> &
  UnstyledProps

const PaginationPreviousButton = ({
  className,
  unstyled,
  ...props
}: PaginationPreviousButtonProps) => {
  const { goToPreviousPage } = usePaginationContext()
  const { previousBtn } = usePaginationStyles(unstyled)

  return (
    <button
      onClick={goToPreviousPage}
      className={previousBtn({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                            PaginationNextButton                            */
/* -------------------------------------------------------------------------- */

type PaginationNextButtonProps = React.ComponentProps<"button"> & UnstyledProps

const PaginationNextButton = ({
  className,
  unstyled,
  ...props
}: PaginationNextButtonProps) => {
  const { goToNextPage } = usePaginationContext()
  const { nextBtn } = usePaginationStyles(unstyled)

  return (
    <button
      onClick={goToNextPage}
      className={nextBtn({ className })}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                         PaginationPreviousEllipsis                         */
/* -------------------------------------------------------------------------- */

type PaginationPreviousEllipsisProps = React.ComponentProps<"span"> &
  UnstyledProps

const PaginationPreviousEllipsis = ({
  className,
  unstyled,
  ...props
}: PaginationPreviousEllipsisProps) => {
  const { prevEllipsisActive } = usePaginationContext()
  const { previousElipsis } = usePaginationStyles(unstyled)

  if (!prevEllipsisActive) return

  return (
    <span aria-hidden className={previousElipsis({ className })} {...props}>
      <EllipsisIcon className="size-4" />
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*                           PaginationNextEllipsis                           */
/* -------------------------------------------------------------------------- */

type PaginationNextEllipsisProps = React.ComponentProps<"span"> & UnstyledProps

const PaginationNextEllipsis = ({
  className,
  unstyled,
  ...props
}: PaginationNextEllipsisProps) => {
  const { nextEllipsisActive } = usePaginationContext()
  const { nextElipsis } = usePaginationStyles(unstyled)

  if (!nextEllipsisActive) return

  return (
    <span aria-hidden className={nextElipsis({ className })} {...props}>
      <EllipsisIcon className="size-4" />
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationList,
  PaginationNextButton,
  PaginationNextEllipsis,
  PaginationPreviousButton,
  PaginationPreviousEllipsis,
  usePaginationContext,
}
