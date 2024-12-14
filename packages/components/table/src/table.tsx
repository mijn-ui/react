"use client"

import * as React from "react"
import { createContext } from "@mijn-ui/react-utilities/context"
import { UnstyledProps } from "@mijn-ui/react-utilities/shared"
import { tableStyles } from "@mijn-ui/react-theme"
import { useTVUnstyled } from "@mijn-ui/react-hooks"

/* -------------------------------------------------------------------------- */
/*                                TableContext                                */
/* -------------------------------------------------------------------------- */

type TableContextType = UnstyledProps & {
  styles: ReturnType<typeof tableStyles>
}

const [TableProvider, useTableContext] = createContext<TableContextType>({
  name: "TableContext",
  strict: true,
  errorMessage:
    "useTableContext: `context` is undefined. Seems you forgot to wrap component within <Table />",
})

/* -------------------------------------------------------------------------- */
/*                                  TabelHook                                 */
/* -------------------------------------------------------------------------- */

const useTableStyles = (unstyledOverride?: boolean) => {
  const context = useTableContext()
  return useTVUnstyled(context, unstyledOverride)
}

/* -------------------------------------------------------------------------- */
/*                                    Table                                   */
/* -------------------------------------------------------------------------- */

type TableProps = React.ComponentPropsWithRef<"table"> & UnstyledProps

const Table = ({ className, unstyled = false, ...props }: TableProps) => {
  const styles = tableStyles()

  return (
    <TableProvider value={{ unstyled, styles }}>
      <table className={styles.base({ className })} {...props} />
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
  const { header } = useTableStyles(unstyled)

  return <thead className={header({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                  TableBody                                 */
/* -------------------------------------------------------------------------- */

type TableBodyProps = React.ComponentPropsWithRef<"tbody"> & UnstyledProps

const TableBody = ({ className, unstyled, ...props }: TableBodyProps) => {
  const { body } = useTableStyles(unstyled)

  return <tbody className={body({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                 TableFooter                                */
/* -------------------------------------------------------------------------- */

type TableFooterProps = React.ComponentPropsWithRef<"tfoot"> & UnstyledProps

const TableFooter = ({ className, unstyled, ...props }: TableFooterProps) => {
  const { footer } = useTableStyles(unstyled)

  return <tfoot className={footer({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                  TableRow                                  */
/* -------------------------------------------------------------------------- */

type TableRowProps = React.ComponentPropsWithRef<"tr"> & UnstyledProps

const TableRow = ({ className, unstyled, ...props }: TableRowProps) => {
  const { row } = useTableStyles(unstyled)

  return <tr className={row({ className })} {...props} />
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
  const { headerCell } = useTableStyles(unstyled)

  return <th className={headerCell({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                  TableCell                                 */
/* -------------------------------------------------------------------------- */

type TableCellProps = React.ComponentPropsWithRef<"td"> & UnstyledProps

const TableCell = ({ className, unstyled, ...props }: TableCellProps) => {
  const { cell } = useTableStyles(unstyled)

  return <td className={cell({ className })} {...props} />
}

/* -------------------------------------------------------------------------- */
/*                                TableCaption                                */
/* -------------------------------------------------------------------------- */

type TableCaptionProps = React.ComponentPropsWithRef<"caption"> & UnstyledProps

const TableCaption = ({ className, unstyled, ...props }: TableCaptionProps) => {
  const { caption } = useTableStyles(unstyled)

  return <caption className={caption({ className })} {...props} />
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
