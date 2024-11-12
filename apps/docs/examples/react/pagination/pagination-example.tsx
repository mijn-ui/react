"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationList,
  PaginationNextButton,
  PaginationNextEllipsis,
  PaginationPreviousButton,
  PaginationPreviousEllipsis,
} from "@mijn-ui/components/pagination"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(7)

  const ItemsPerPage = 10
  const TotalPage = 160

  return (
    <Pagination
      totalPages={TotalPage}
      currentPage={currentPage}
      itemsPerPage={ItemsPerPage}
      onChangePage={setCurrentPage}
    >
      <PaginationContent>
        <PaginationPreviousButton className="h-9 sm:h-10">
          <LuChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </PaginationPreviousButton>
        <PaginationPreviousEllipsis />
        {/* you can customize the style of the button using css selectors */}
        <PaginationList className="[&>li>button]:h-9 [&>li>button]:w-9 sm:[&>li>button]:h-10 sm:[&>li>button]:w-10" />
        <PaginationNextEllipsis className="[&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4" />
        <PaginationNextButton className="h-9 sm:h-10">
          <span className="hidden sm:inline">Next</span>
          <LuChevronRight className="h-4 w-4" />
        </PaginationNextButton>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationExample
