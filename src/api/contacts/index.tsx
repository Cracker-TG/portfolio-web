import { IFormValues } from "@/components/contactForm";
import axios from "../axios";

function createContact({ subject, email, message, token }: IFormValues) {
  return axios.post(
    "/contacts",
    { subject, email, message },
    {
      headers: {
        "cf-turnstile-token": token,
      },
    }
  );
}

export default { createContact };
