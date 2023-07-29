import { IFormValues } from "@/components/contactForm";

async function createContact({ subject, email, message }: IFormValues) {
  const response = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject,
      email,
      message,
    }),
  });

  return response.json();
}

export default { createContact };
