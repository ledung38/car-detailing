"use client";

import { generateEmailHTML } from "@/lib/utils/email";
import { bookingFormSchema } from "@/modules/booking/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast as message } from "sonner";

export interface FormData {
  // Step 4
  date: Date;
  time: string;
  address: string;
  fullName: string;
  email: string;
  phone: string;
}

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<FormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      time: "",
      address: "",
      email: "",
      phone: "",
      fullName: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  async function onSubmit(values: FormData) {
    try {
      const content = generateEmailHTML(values);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: values.email,
          subject: `Boss, we have a New Car Detailing Order – ${values.fullName}`,
          message: content,
        }),
      });

      const data = await res.json();
      if (data?.success) {
        message.success(
          "Your cleaning service booking has been successfully created!",
        );
        setCurrentStep(currentStep + 1);
        form.reset();
      } else {
        message.error(
          "Something went wrong. Please try again or contact support.",
        );
      }
    } catch (error: any) {
      console.error(error);
      message.error("Something went wrong.");
    }
  }

  return <div></div>;
};

export default BookingWizard;
