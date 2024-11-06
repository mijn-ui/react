"use client"

import * as React from "react"
import {
  UnstyledProvider,
  useUnstyled,
} from "@/mijn-ui/context/unstyled-provider"
import { UnstyledProps } from "@/mijn-ui/types"
import { applyUnstyled } from "@mijn-ui/utils"

/* -------------------------------------------------------------------------- */
/*                                    Table                                   */
/* -------------------------------------------------------------------------- */

type TableProps = React.ComponentPropsWithRef<"table"> & UnstyledProps

const Table = ({ className, unstyled = false, ref, ...props }: TableProps) => {
  return (
    <UnstyledProvider unstyled={unstyled}>
      <table
        ref={ref}
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
  ref,
  ...props
}: TableHeaderProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <thead
      ref={ref}
      className={applyUnstyled(isUnstyled, "h-11", className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                  TableBody                                 */
/* -------------------------------------------------------------------------- */

type TableBodyProps = React.ComponentPropsWithRef<"tbody"> & UnstyledProps

const TableBody = ({ className, unstyled, ref, ...props }: TableBodyProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tbody
      ref={ref}
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

const TableFooter = ({
  className,
  unstyled,
  ref,
  ...props
}: TableFooterProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tfoot
      ref={ref}
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

const TableRow = ({ className, unstyled, ref, ...props }: TableRowProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <tr
      ref={ref}
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
  ref,
  ...props
}: TableHeaderCellProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <th
      ref={ref}
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

const TableCell = ({ className, unstyled, ref, ...props }: TableCellProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <td
      ref={ref}
      className={applyUnstyled(isUnstyled, "px-4 py-2 align-middle", className)}
      {...props}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                TableCaption                                */
/* -------------------------------------------------------------------------- */

type TableCaptionProps = React.ComponentPropsWithRef<"caption"> & UnstyledProps

const TableCaption = ({
  className,
  unstyled,
  ref,
  ...props
}: TableCaptionProps) => {
  const { unstyled: contextUnstyled } = useUnstyled()
  const isUnstyled = unstyled ?? contextUnstyled

  return (
    <caption
      ref={ref}
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
