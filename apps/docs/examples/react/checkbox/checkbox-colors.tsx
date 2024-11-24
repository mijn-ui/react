import { Checkbox } from "@mijn-ui/react-checkbox"
import { Label } from "@mijn-ui/react-label"

const CheckboxColors = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="primary" color="primary" />
        <Label htmlFor="primary">Primary</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="secondary" color="secondary" />
        <Label htmlFor="secondary">Secondary</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="accent" color="accent" />
        <Label htmlFor="accent">Accent</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="neutral" color="neutral" />
        <Label htmlFor="neutral">Neutral</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="danger" color="danger" />
        <Label htmlFor="danger">Danger</Label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="success" color="success" />
        <Label htmlFor="success">Success</Label>
      </div>
    </div>
  )
}

export default CheckboxColors
