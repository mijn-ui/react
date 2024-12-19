import { applyUnstyled } from "./unstyled"

/**
 * Creates unstyled slot functions that dynamically adapt to the arguments
 * of the original slot functions provided in `styleSlots`.
 *
 * @template T - A record where values are functions with arbitrary arguments.
 * @param styleSlots - A record of functions defining styles for each slot.
 * @param unstyled - A flag to determine whether to apply unstyled mode.
 *
 * @returns A record of functions with the same arguments as the originals,
 *          plus `className`, applying unstyled logic.
 */

export const createTVUnstyledSlots = <
  //eslint-disable-next-line
  T extends Record<string, (...args: any[]) => string | undefined>, // T is a record of slot functions
>(
  styleSlots: T,
  unstyled?: boolean,
): {
  [K in keyof T]: (...args: Parameters<T[K]>) => string | undefined
} => {
  return Object.keys(styleSlots).reduce(
    (acc, key) => {
      //eslint-disable-next-line
      acc[key as keyof T] = (...args: any[]) => {
        // Extract the last argument if it includes `className`
        const lastArg = args[args.length - 1]
        const className = lastArg?.className

        // Remove the `className` from the arguments to pass to the original function
        const argsWithoutClassName = className ? args.slice(0, -1) : args

        // Call the original function and merge styles
        return applyUnstyled(
          unstyled,
          styleSlots[key as keyof T]?.(...argsWithoutClassName) || "",
          className,
        )
      }
      return acc
    },
    {} as { [K in keyof T]: (...args: Parameters<T[K]>) => string | undefined },
  )
}
