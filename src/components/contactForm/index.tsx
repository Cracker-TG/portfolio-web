import { Button, Input, Textarea, Typography } from "../BaseComponent";
import Components from "@/components";
import Box from "../box";

function ContactForm(): JSX.Element {
  return (
    <Components.Box flexDirection={"column"} gap={30}>
      <Typography text="GET IN TOUCH" />
      <Input label="Subject" />
      <Input label="Email" />
      <Textarea label="Message" />
      <Box gap={10}>
        <Button onClick={() => {}} background="#7fff72">
          <Typography text="Submit" />
        </Button>
        <Button onClick={() => {}} background="#ff9737">
          <Typography text="Clear" />
        </Button>
      </Box>
    </Components.Box>
  );
}

export default ContactForm;
