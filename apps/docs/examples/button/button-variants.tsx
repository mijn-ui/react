import { Button } from "@mijn-ui/react-button"

const ButtonVariants = () => {
  return (
    <div className="grid grid-cols-6 gap-3">
      <Button variant="filled">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="text">Button</Button>
      <Button color="secondary" variant="filled">
        Button
      </Button>
      <Button color="secondary" variant="outlined">
        Button
      </Button>
      <Button color="secondary" variant="text">
        Button
      </Button>
      <Button color="accent" variant="filled">
        Button
      </Button>
      <Button color="accent" variant="outlined">
        Button
      </Button>
      <Button color="accent" variant="text">
        Button
      </Button>
      <Button color="danger" variant="filled">
        Button
      </Button>
      <Button color="danger" variant="outlined">
        Button
      </Button>
      <Button color="danger" variant="text">
        Button
      </Button>
    </div>
  )
}

export default ButtonVariants
