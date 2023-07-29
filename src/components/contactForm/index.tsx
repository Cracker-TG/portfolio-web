import { Button, Input, Textarea, Typography } from "../BaseComponent";
import { useForm } from "react-hook-form";
import Components from "@/components";
import Box from "../box";
import { useMutation } from "react-query";
import api from "@/api";

export interface IFormValues {
  subject: string;
  email: string;
  message: string;
}

function ContactForm(): JSX.Element {
  const createContactMutation = useMutation({
    mutationFn: api.createContact,
  });

  const defaultValues = {
    subject: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ defaultValues });

  const onSubmit = (value: IFormValues) => {
    createContactMutation.mutate(value, {
      onSuccess: () => {
        alert("success");
      },
      onError: (err) => {
        console.log({ err });
      },
    });
  };

  return (
    <Components.Box flexDirection={"column"} gap={30}>
      <Typography text="GET IN TOUCH" />
      <Input register={register} label="Subject" name="subject" />
      <Input
        error={errors.email}
        register={register}
        label="Email"
        name="email"
        required
        pattern={{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email",
        }}
      />
      <Textarea register={register} label="Message" name="message" />
      <Box gap={10}>
        <Button onClick={handleSubmit(onSubmit)} variant="primary">
          <Typography text="Submit" />
        </Button>
        <Button onClick={() => reset(defaultValues)} variant="danger">
          <Typography text="Clear" />
        </Button>
      </Box>
    </Components.Box>
  );
}

export default ContactForm;
