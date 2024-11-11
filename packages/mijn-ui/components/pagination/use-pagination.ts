import * as React from "react"

type usePaginationProps = {
  totalPages: number
  itemsPerPage: number
  currentPage: number
}

const usePaginationRange = ({
  totalPages,
  itemsPerPage,
  currentPage,
}: usePaginationProps) =>
  React.useMemo(() => {
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
  }, [totalPages, itemsPerPage, currentPage])

export { usePaginationRange }
