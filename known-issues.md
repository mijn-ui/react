### Known Issues

**Can't build the docs folder in the development**

I am currently facing an issue where I am unable to build the docs folder in the development environment. The exact cause of this issue is still unknown, but it seems to be related to package versions or other factors.

Deploying it on Vercel seems to be working fine.

For more details about this issue, please refer to the following GitHub discussion: [GitHub Discussion](https://github.com/vercel/next.js/discussions/43577)

---

### Running Dev server consumes a lot of RAM

Another issue we are experiencing is that the `next dev` command is consuming a significant amount of memory, sometimes exceeding 10GB or more. This has been a known issue in Next.js, and unfortunately, there is no known solution or workaround at the moment. If you come across any solution, please let us know.

You can find the issue here: [Github Issue](https://github.com/vercel/next.js/issues/54708)

According to the earlier mentioned discussion, it is recommended to have at least 16GB of available RAM to run the development server without any issues. Running it on a system with lower RAM may result in system crashes due to high memory consumption.

Please note that we are actively working on finding a solution to these issues and will update you as soon as we have any further information.

---

### Tailwind CSS Reference issue with dev and production server

The current monorepo stores most of the packages like Tailwind, Next.js, and ESLint in the root, including the packages from the Fumadocs, which is the documentation framework used in the current docs repo.

The Tailwind typography plugin and the reference to the node_modules work in production, but in dev mode, since the Fumadocs packages are in the root node_modules folder, it doesn't work. To make it work, I have implemented the following workaround:

```
"../../node_modules/fumadocs-ui/dist/**/*.js",
"./node_modules/fumadocs-ui/dist/**/*.js",
```

As for the Tailwind typography issue, I am currently unsure why it isn't working. To make it work in dev mode, I have created a CSS file that contains all of the typography plugin classes and imported it dynamically.

Solutions to these problems are really needed, and I would appreciate your help in fixing them.
