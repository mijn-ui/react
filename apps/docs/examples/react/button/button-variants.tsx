import { Button } from "@mijn-ui/react/components/button"

const ButtonVariants = () => {
  return (
    <div className="grid grid-cols-6 gap-3">
      <Button variant="filled">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="text">Button</Button>
      <Button color="secondary" variant="filled">
        Button
      </Button>
      <Button color="secondary" variant="outline">
        Button
      </Button>
      <Button color="secondary" variant="text">
        Button
      </Button>
      <Button color="accent" variant="filled">
        Button
      </Button>
      <Button color="accent" variant="outline">
        Button
      </Button>
      <Button color="accent" variant="text">
        Button
      </Button>
      <Button color="danger" variant="filled">
        Button
      </Button>
      <Button color="danger" variant="outline">
        Button
      </Button>
      <Button color="danger" variant="text">
        Button
      </Button>
    </div>
  )
}

export default ButtonVariants
