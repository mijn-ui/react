import { Label } from "@mijn-ui/react/components/label";
import { Textarea } from "@mijn-ui/react/components/textarea";

const TextareaExample = () => {
  return (
    <div className="w-full max-w-80 space-y-1">
      <Label>Text Area</Label>
      <Textarea placeholder="Type your message here." />
    </div>
  );
};

export default TextareaExample;
