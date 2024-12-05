const fs = require("fs")
const path = require("path")

// List of components with their folder names
const components = [
  { folder: "accordion" },
  { folder: "alert" },
  { folder: "alert-dialog" },
  { folder: "autocomplete" },
  { folder: "avatar" },
  { folder: "badge" },
  { folder: "button" },
  { folder: "calendar" },
  { folder: "card" },
  { folder: "checkbox" },
  { folder: "collapsible" },
  { folder: "command" },
  { folder: "date-picker" },
  { folder: "dialog" },
  { folder: "dropdown-menu" },
  { folder: "input" },
  { folder: "label" },
  { folder: "pagination" },
  { folder: "popover" },
  { folder: "progress" },
  { folder: "radio-group" },
  { folder: "scroll-area" },
  { folder: "select" },
  { folder: "separator" },
  { folder: "skeleton" },
  { folder: "switch" },
  { folder: "table" },
  { folder: "tabs" },
  { folder: "textarea" },
]

const baseDir = path.resolve(__dirname, "packages/components/") // Adjust this path

components.forEach(({ folder }) => {
  const componentDir = path.join(baseDir, folder)
  const packageJsonPath = path.join(componentDir, "package.json")

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

    // Add the 'keywords' field if it doesn't exist
    if (!packageJson.keywords) {
      packageJson.keywords = []
    }

    // Add the folder name and common keywords
    if (!packageJson.keywords.includes(folder)) {
      packageJson.keywords.push(folder)
    }
    if (!packageJson.keywords.includes("react")) {
      packageJson.keywords.push("react")
    }
    if (!packageJson.keywords.includes("nextjs")) {
      packageJson.keywords.push("nextjs")
    }

    // Write the updated package.json back to the file
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8",
    )
    console.log(`Updated keywords in ${packageJsonPath}`)
  } else {
    console.log(`No package.json found for ${folder}`)
  }
})
