import { IFormValues } from "@/components/contactForm";
import axios from "../axios";

function createContact({ subject, email, message }: IFormValues) {
  return axios.post("/contacts/", { subject, email, message });
}

export default { createContact };
