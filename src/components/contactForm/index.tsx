import { Alert, Button, Input, Textarea, Typography } from "../BaseComponent";
import { useForm } from "react-hook-form";
import Components from "@/components";
import Box from "../box";
import { useMutation } from "react-query";
import api from "@/api";
import type { IAlertHandle } from "../BaseComponent/Alert";
import { useEffect, useRef, useState } from "react";

export interface IFormValues {
  subject: string;
  email: string;
  message: string;
  token: string;
}

interface ITurnstile {
  token: string;
  widgetId: string;
}

function ContactForm(): JSX.Element {
  const [turnstileData, setTurnstile] = useState<ITurnstile>({
    widgetId: "",
    token: "",
  });
  const alertRef = useRef<IAlertHandle>(null);

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

  const createContactMutation = useMutation({
    mutationFn: api.contacts.createContact,
  });

  const onSubmit = async (value: IFormValues) => {
    const { data } = await createContactMutation.mutateAsync({
      ...value,
      token: turnstileData.token,
    });

    if (data.success) {
      reset();
      alertRef.current?.open();
      setTurnstile((prev) => ({ ...prev, token: resetTurnstileToken() }));
    }
  };

  const resetTurnstileToken = () => {
    return turnstile.reset(turnstileData.widgetId);
  };

  const initTurnstile = () => {
    const id = turnstile.render("#turnstile-container", {
      sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
      callback: function (token: string) {
        setTurnstile((prev) => ({ ...prev, token }));
      },
    });

    setTurnstile((prev) => ({ ...prev, widgetId: id }));
  };

  useEffect(() => {
    initTurnstile();
  }, []);

  return (
    <Components.Box flexDirection={"column"} gap={30} position={"relative"}>
      <Alert
        ref={alertRef}
        type="success"
        message="Thank You"
        autoCloseMs={3000}
      />
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
      <div id="turnstile-container"></div>
    </Components.Box>
  );
}

export default ContactForm;
