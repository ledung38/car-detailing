import { z } from "zod";

export const bookingFormSchema = z.object({
  // Step 1: Service Selection
  serviceId: z.string().nonempty({
    message: "Please select a service.",
  }),
  carSize: z.enum(["S", "M", "L"], {
    message: "Please select a car size.",
  }),
  extensions: z.array(z.string()).default([]),

  // Step 2: Car Information
  carMake: z.string().trim().nonempty({
    message: "Car make is required.",
  }),
  carModel: z.string().trim().nonempty({
    message: "Car model is required.",
  }),
  carYear: z.string().trim().nonempty({
    message: "Car year is required.",
  }),
  carColor: z.string().trim().nonempty({
    message: "Car color is required.",
  }),
  additionalNotes: z.string().optional().default(""),

  // Step 3: Appointment Details
  date: z.date({
    error: (issue) =>
      issue.input === undefined
        ? "Preferred date is required."
        : "Preferred date is invalid",
  }),
  time: z.string().trim().nonempty({
    message: "Preferred time is required.",
  }),
  address: z.string().trim().nonempty({
    message: "Address is required.",
  }),

  // Step 4: Personal Information
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
});
