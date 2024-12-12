"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { applyUnstyled, UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { tableStyles } from "@mijn-ui/react-theme"

/* -------------------------------------------------------------------------- */
/*                                TableContext                                */
/* -------------------------------------------------------------------------- */

type TableContextType = UnstyledProps & ReturnType<typeof tableStyles>

const [TableProvider, useTableContext] = createContext<TableContextType>({
  name: "TableContext",
  strict: true,
  errorMessage:
    "useTableContext: `context` is undefined. Seems you forgot to wrap component within <Table />",
})

/* -------------------------------------------------------------------------- */
/*                                    Table                                   */
/* -------------------------------------------------------------------------- */

type TableProps = React.ComponentPropsWithRef<"table"> & UnstyledProps

const Table = ({ className, unstyled = false, ...props }: TableProps) => {
  const styles = tableStyles()

  return (
    <TableProvider value={{ unstyled, ...styles }}>
      <table
        className={applyUnstyled(unstyled, styles.base(), className)}
        {...props}
      />
    </TableProvider>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TableHeader                                */
/* -------------------------------------------------------------------------- */

type TableHeaderProps = React.ComponentPropsWithRef<"thead"> & UnstyledProps

const TableHeader = ({
  className,
  unstyled,

  ...props
}: TableHeaderProps) => {
  const { unstyled: contextUnstyled, header } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <thead
      className={applyUnstyled(isUnstyled, header(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableBody                                 */
/* -------------------------------------------------------------------------- */

type TableBodyProps = React.ComponentPropsWithRef<"tbody"> & UnstyledProps

const TableBody = ({ className, unstyled, ...props }: TableBodyProps) => {
  const { unstyled: contextUnstyled, body } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tbody
      className={applyUnstyled(isUnstyled, body(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TableFooter                                */
/* -------------------------------------------------------------------------- */

type TableFooterProps = React.ComponentPropsWithRef<"tfoot"> & UnstyledProps

const TableFooter = ({ className, unstyled, ...props }: TableFooterProps) => {
  const { unstyled: contextUnstyled, footer } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tfoot
      className={applyUnstyled(isUnstyled, footer(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableRow                                  */
/* -------------------------------------------------------------------------- */

type TableRowProps = React.ComponentPropsWithRef<"tr"> & UnstyledProps

const TableRow = ({ className, unstyled, ...props }: TableRowProps) => {
  const { unstyled: contextUnstyled, row } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tr className={applyUnstyled(isUnstyled, row(), className)} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                               TableHeaderCell                              */
/* -------------------------------------------------------------------------- */

type TableHeaderCellProps = React.ComponentPropsWithRef<"th"> & UnstyledProps

const TableHeaderCell = ({
  className,
  unstyled,
  ...props
}: TableHeaderCellProps) => {
  const { unstyled: contextUnstyled, headerCell } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <th
      className={applyUnstyled(isUnstyled, headerCell(), className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableCell                                 */
/* -------------------------------------------------------------------------- */

type TableCellProps = React.ComponentPropsWithRef<"td"> & UnstyledProps

const TableCell = ({ className, unstyled, ...props }: TableCellProps) => {
  const { unstyled: contextUnstyled, cell } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <td className={applyUnstyled(isUnstyled, cell(), className)} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                                TableCaption                                */
/* -------------------------------------------------------------------------- */

type TableCaptionProps = React.ComponentPropsWithRef<"caption"> & UnstyledProps

const TableCaption = ({ className, unstyled, ...props }: TableCaptionProps) => {
  const { unstyled: contextUnstyled, caption } = useTableContext()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <caption
      className={applyUnstyled(isUnstyled, caption(), className)}
      {...props}
    />
  )
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
}
