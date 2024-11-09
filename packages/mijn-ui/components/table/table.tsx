"use client"

import * as React from "react"
import {
  UnstyledProvider,
  useUnstyled,
} from "@mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"

/* -------------------------------------------------------------------------- */
/*                                    Table                                   */
/* -------------------------------------------------------------------------- */

type TableProps = React.ComponentPropsWithRef<"table"> & UnstyledProps

const Table = ({ className, unstyled = false, ...props }: TableProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <table
        className={applyUnstyled(unstyled, "relative text-sm", className)}
        {...props}
      />
    </UnstyledProvider>
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <thead
      className={applyUnstyled(isUnstyled, "h-11", className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableBody                                 */
/* -------------------------------------------------------------------------- */

type TableBodyProps = React.ComponentPropsWithRef<"tbody"> & UnstyledProps

const TableBody = ({ className, unstyled, ...props }: TableBodyProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tbody
      className={applyUnstyled(
        isUnstyled,
        "divide-border divide-y [&>tr:hover]:bg-accent",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                 TableFooter                                */
/* -------------------------------------------------------------------------- */

type TableFooterProps = React.ComponentPropsWithRef<"tfoot"> & UnstyledProps

const TableFooter = ({ className, unstyled, ...props }: TableFooterProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tfoot
      className={applyUnstyled(
        isUnstyled,
        "border-t border-t-main-border font-medium",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableRow                                  */
/* -------------------------------------------------------------------------- */

type TableRowProps = React.ComponentPropsWithRef<"tr"> & UnstyledProps

const TableRow = ({ className, unstyled, ...props }: TableRowProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tr
      className={applyUnstyled(
        isUnstyled,
        "border-b border-main-border text-left",
        className,
      )}
      {...props}
    />
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
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <th
      className={applyUnstyled(
        isUnstyled,
        "px-4 py-3 font-semibold",
        className,
      )}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableCell                                 */
/* -------------------------------------------------------------------------- */

type TableCellProps = React.ComponentPropsWithRef<"td"> & UnstyledProps

const TableCell = ({ className, unstyled, ...props }: TableCellProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <td
      className={applyUnstyled(isUnstyled, "px-4 py-2 align-middle", className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                TableCaption                                */
/* -------------------------------------------------------------------------- */

type TableCaptionProps = React.ComponentPropsWithRef<"caption"> & UnstyledProps

const TableCaption = ({ className, unstyled, ...props }: TableCaptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <caption
      className={applyUnstyled(
        isUnstyled,
        "mt-4 text-sm text-neutral-text",
        className,
      )}
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
