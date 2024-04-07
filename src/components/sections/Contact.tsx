"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { onSubmitAction } from "~/lib/formSubmit";
import {
  contactFormSchema,
  type ContactFormData,
} from "~/types/contactFormSchema";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });

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

  return (
    <Form {...form}>
      <form
        className="relative w-10/12 space-y-4 rounded-lg bg-slate-50 p-8 text-xl sm:w-8/12 sm:text-2xl"
        action={formAction}
        ref={formRef}
        onSubmit={(evt) => {
          evt.preventDefault();
          void form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
      >
        <div className="absolute left-[-0.875rem] flex h-12 w-4/6 min-w-fit items-center rounded-r-full rounded-t-full bg-redN">
          <div className="absolute top-11 h-6 w-3.5 rounded-b-full bg-redN"></div>
          <div className="absolute top-12 z-10 h-6 w-3.5 rounded-l-full bg-[#d43346]"></div>
          <h2 className="pl-6 pr-2 text-2xl text-white sm:text-4xl">
            contactForm &#123;
          </h2>
        </div>
        <div className="h-12" />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name: z.string().min(1);" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email: z.string().trim().email();"
                  {...field}
                />
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
                <Textarea
                  placeholder="message: z.string().min(1);"
                  {...field}
                />
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
        <Button type="submit">Submit()</Button>
        <p className="text-redN">&#125;</p>
      </form>
    </Form>
  );
};

export default ContactForm;
