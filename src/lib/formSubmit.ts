"use server";
import { contactFormSchema } from "~/types/contactFormSchema";
import { sendEmail } from "./sendEmail";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(
  _prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      if (formData[key] !== undefined) {
        fields[key] = formData[key]?.toString() ?? "";
      }
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (parsed.data.honeypot !== undefined && parsed.data.honeypot !== "") {
    return {
      message: "Invalid email",
      fields: parsed.data,
    };
  }

  await sendEmail(parsed.data.name, parsed.data.email, parsed.data.message);

  return { message: "Success" };
}
