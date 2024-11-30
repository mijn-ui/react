export const animations = {
  keyframes: {
    /* ----------------------------- base keyframes ----------------------------- */
    "fade-in": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "fade-out": {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
    "scale-in": {
      from: { transform: "scale(.5)" },
      to: { transform: "scale(1)" },
    },
    "scale-out": {
      from: { transform: "scale(1)" },
      to: { transform: "scale(.5)" },
    },

    /* -------------------------- components keyframes -------------------------- */

    "accordion-open": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-close": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    "collapsible-open": {
      from: { height: "0" },
      to: { height: "var(--radix-collapsible-content-height)" },
    },
    "collapsible-close": {
      from: { height: "var(--radix-collapsible-content-height)" },
      to: { height: "0" },
    },
    "dialog-open": {
      from: { transform: "scale(0.95) translate(-50%, 0)", opacity: "0" },
      to: { transform: "scale(1) translate(-50%, 0)" },
    },
    "dialog-close": {
      from: { transform: "scale(1) translate(-50%, 0)" },
      to: { transform: "scale(0.95) translateY(-50%, 0)", opacity: "0" },
    },
    "popover-open": {
      from: { opacity: "0", transform: "scale(0.95) translateY(-10px)" },
      to: { opacity: "1", transform: "scale(1) translateY(0)" },
    },
    "popover-close": {
      from: { opacity: "1", transform: "scale(1) translateY(0)" },
      to: { opacity: "0", transform: "scale(0.95) translateY(-10px)" },
    },
  },

  animation: {
    "fade-in": "fade-in 300ms ease",
    "fade-out": "fade-out 300ms ease",

    "scale-in": "scale-in 300ms ease",
    "scale-out": "scale-out 300ms ease",

    "dialog-open": "dialog-open 200ms cubic-bezier(0.32, 0.72, 0, 1)",
    "dialog-close": "dialog-close 300ms cubic-bezier(0.32, 0.72, 0, 1)",

    "popover-open": "popover-open 150ms ease",
    "popover-close": "popover-close 150ms ease",

    "accordion-open":
      "accordion-open 0.2s ease-in-out, fade-in 0.4s ease-in-out",
    "accordion-close":
      "accordion-close 0.2s ease-in-out, fade-in 0.4s ease-in-out",

    "collapsible-open":
      "collapsible-open 0.2s ease-in-out, fade-in 0.4s ease-in-out",
    "collapsible-close":
      "collapsible-close 0.2s ease-in-out, fade-in 0.4s ease-in-out",
  },
}
