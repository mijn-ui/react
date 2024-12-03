### Known Issues

### Tailwind CSS Reference issue with dev and production server

The current monorepo stores most of the packages like Tailwind, Next.js, and ESLint in the root, including the packages from the Fumadocs, which is the documentation framework used in the current docs repo.

The Tailwind typography plugin and the reference to the node_modules work in production, but in dev mode, since the Fumadocs packages are in the root node_modules folder, it doesn't work. To make it work, I have implemented the following workaround:

```
"../../node_modules/fumadocs-ui/dist/**/*.js",
"./node_modules/fumadocs-ui/dist/**/*.js",
```

As for the Tailwind typography issue, I am currently unsure why it isn't working. To make it work in dev mode, I have created a CSS file that contains all of the typography plugin classes and imported it dynamically.

Solutions to these problems are really needed, and I would appreciate your help in fixing them.
