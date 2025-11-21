
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | undefined;


export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
    }
    return {
        message: "Invalid form data",
        fields,
        issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return a success message.
  console.log("Form submitted successfully!");
  console.log(parsed.data);

  return {
    message: "Your message has been sent successfully!",
  };
}
