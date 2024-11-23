import * as React from "react"
import { usePaginationRange } from "./use-pagination"
import { buttonStyles } from "@mijn-ui-react/button"
import { UnstyledProvider, useUnstyled } from "@mijn-ui-react/utilities/context"
import { UnstyledProps, applyUnstyled } from "@mijn-ui-react/utilities/shared"
import { LuMoreHorizontal } from "react-icons/lu"

type PaginationContextType = {
  paginationRange: number[]
  currentPage: number
  prevEllipsisActive: boolean
  nextEllipsisActive: boolean
  setPage: (page: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
}

const PaginationContext = React.createContext<
  PaginationContextType | undefined
>(undefined)

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

  return (
    <PaginationContext.Provider
      value={{
        paginationRange: paginationRange.range,
        currentPage,
        prevEllipsisActive: paginationRange.prevEllipsisActive,
        nextEllipsisActive: paginationRange.nextEllipsisActive,
        setPage,
        goToPreviousPage,
        goToNextPage,
      }}
    >
      <UnstyledProvider unstyled={unstyled}>{children}</UnstyledProvider>
    </PaginationContext.Provider>
  )
}

const usePagination = (): PaginationContextType => {
  const context = React.useContext(PaginationContext)
  if (context === undefined) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider",
    )
  }
  return context
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <nav
      className={applyUnstyled(
        isUnstyled,
        "flex items-center gap-2",
        className,
      )}
      {...props}
    />
  )
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
  const { currentPage, setPage, paginationRange } = usePagination()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <ul
      className={applyUnstyled(
        isUnstyled,
        "flex flex-row items-center gap-1",
        className,
      )}
      {...props}
    >
      {paginationRange.map((page, index) => (
        <li key={index} onClick={() => setPage(page)}>
          <button
            className={applyUnstyled(
              isUnstyled,
              buttonStyles({
                variant: page === currentPage ? "outline" : "text",
                color: "accent",
                size: "icon",
              }),
            )}
          >
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
  const { goToPreviousPage } = usePagination()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <button
      onClick={goToPreviousPage}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({
          variant: "text",
          color: "accent",
          size: "md",
          className: "gap-1 font-medium",
        }),
        className,
      )}
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
  const { goToNextPage } = usePagination()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <button
      onClick={goToNextPage}
      className={applyUnstyled(
        isUnstyled,
        buttonStyles({
          variant: "text",
          color: "accent",
          size: "md",
          className: "gap-1 pl-2.5 font-medium",
        }),
        className,
      )}
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
  const { prevEllipsisActive } = usePagination()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  if (!prevEllipsisActive) return

  return (
    <span
      aria-hidden
      className={applyUnstyled(
        isUnstyled,
        "flex h-9 w-9 items-center justify-center",
        className,
      )}
      {...props}
    >
      <LuMoreHorizontal className="size-4" />
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
  const { nextEllipsisActive } = usePagination()
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  if (!nextEllipsisActive) return

  return (
    <span
      aria-hidden
      className={applyUnstyled(
        isUnstyled,
        "flex h-9 w-9 items-center justify-center",
        className,
      )}
      {...props}
    >
      <LuMoreHorizontal className="size-4" />
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
  usePagination,
}
