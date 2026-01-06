import { z } from "zod";
export const bookingFormSchema = z.object({
  fullName: z.string().trim().nonempty({
    message: "Full name is required.",
  }),
  phone: z
    .string()
    .trim()
    .nonempty({
      message: "Phone number is required.",
    })
    .regex(/^\d+$/, {
      message: "Phone number must contain only numbers.",
    })
    .min(8, {
      message: "Phone number must have at least 8 digits.",
    })
    .max(13, {
      message: "Phone number cannot exceed 13 digits.",
    }),
  email: z
    .string()
    .trim()
    .nonempty({
      message: "Email is required.",
    })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email is invalid.",
    }),
  address: z.string().trim().nonempty({
    message: "Address is required.",
  }),
  date: z.date({
    error: (issue) =>
      issue.input === undefined
        ? "Preferred date is required."
        : "Preferred date is invalid",
  }),
  time: z.string().trim().nonempty({
    message: "Preferred time is required.",
  }),
});
