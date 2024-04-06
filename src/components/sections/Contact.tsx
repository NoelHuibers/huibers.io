"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "~/lib/sendEmail";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  honeypot: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.output<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) {
      return;
    }
    await sendEmail(data.name, data.email, data.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input id="name" {...register("name")} className="w-full border p-2" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          className="w-full border p-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full border p-2"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <input
        type="text"
        className="hidden"
        {...register("honeypot")}
        aria-hidden="true"
      />

      <button
        type="submit"
        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
