"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { onSubmitAction } from "~/lib/formSubmit";
import {
  contactFormSchema,
  type ContactFormData,
} from "~/types/contactFormSchema";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [state, formAction] = useActionState(onSubmitAction, {
    message: "",
  });

  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const lastHandledMessage = useRef<string>("");

  useEffect(() => {
    if (!state?.message || state.message === lastHandledMessage.current) {
      return;
    }

    lastHandledMessage.current = state.message;

    if (state.message === "Success") {
      toast.success("E-Mail sent successfully.", { duration: 5000 });
      form.reset();
    } else if (state.message === "Invalid form data") {
      toast.error("Invalid form data. Please check the fields.");
    } else if (state.message === "Invalid email") {
      toast.error("Invalid email. Please check the email field.");
    }
  }, [form, state]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="flex flex-col gap-4"
        onSubmit={(evt) => {
          evt.preventDefault();
          void form.handleSubmit(() => {
            startTransition(() => {
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
      >
        <p className="text-yellowN">contactForm {"{"}</p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Honeypot</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit()"}
        </Button>
        <p className="text-redN">{"}"}</p>
      </form>
    </Form>
  );
};

export default ContactForm;
