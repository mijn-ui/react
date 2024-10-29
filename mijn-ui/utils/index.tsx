import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))

/**
 * Conditionally applies CSS classes based on the `unstyled` flag.
 *
 * If `unstyled` is true, only `userClasses` will be applied, bypassing the default styles.
 * Otherwise, both `defaultClasses` and `userClasses` are combined for a styled component.
 *
 * @param {boolean | undefined} unstyled - A flag indicating whether to bypass default styling.
 * @param {string} defaultClasses - The default CSS classes to apply.
 * @param {string} [userClasses] - Additional user-defined CSS classes.
 * @returns {string | undefined} - The combined class names or only user-defined classes if `unstyled` is true.
 */

export const applyUnstyled = (
  unstyled: boolean | undefined,
  defaultClasses: string,
  userClasses?: string,
): string | undefined => {
  return unstyled ? userClasses : cn(defaultClasses, userClasses)
}
