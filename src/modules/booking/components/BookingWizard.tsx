"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Form } from "@/components/ui/Form";
import { Container } from "@/components/ui";
import { toast as message } from "sonner";
import { generateEmailHTML } from "@/lib/utils/email";
import { SERVICES } from "@/modules/service/contants";

// Hooks
import { useBookingForm } from "../hooks/useBookingForm";

// Components
import BookingHeader from "./BookingHeader";
import ProgressBar from "./ProgressBar";
import Step0_ServiceSelection from "./Step0_ServiceSelection";
import Step1_CarInfo from "./Step1_CarInfo";
import Step2_AppointmentDetails from "./Step2_AppointmentDetails";
import Step3_PersonalInfo from "./Step3_PersonalInfo";
import FormNavigation from "./FormNavigation";
import Step4_Confirmation from "@/modules/booking/components/Step4_Confirmation";
import { BookingStep, FormData } from "@/modules/booking/types";

// Types

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(0);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useBookingForm();

  // Get selected service and extensions name
  const mainServices = SERVICES.slice(0, -1);
  const selectedService = mainServices.find(
    (s) => s.id === form.watch("serviceId"),
  );

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    try {
      const content = generateEmailHTML({
        ...values,
        serviceName: selectedService?.title || "",
        extensionNames: selectedExtensions,
      });
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: values.email,
          subject: `🚗 New Car Detailing Booking – ${values.fullName}`,
          message: content,
        }),
      });

      const data = await res.json();

      if (data?.success) {
        message.success(
          "Booking confirmed! We'll contact you soon to confirm the appointment.",
        );
        setCurrentStep(4);
        form.reset();
      } else {
        message.error(
          "Something went wrong. Please try again or contact support.",
        );
      }
    } catch (error: any) {
      console.error(error);
      message.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleNextStep = async () => {
    // Validate current step fields
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (currentStep) {
      case 0: // Service Selection
        fieldsToValidate = ["serviceId", "carSize"];
        break;
      case 1: // Car Information
        fieldsToValidate = ["carMake", "carModel", "carYear", "carColor"];
        break;
      case 2: // Appointment Details
        fieldsToValidate = ["date", "time", "address"];
        break;
      case 3: // Personal Information
        fieldsToValidate = ["fullName", "email", "phone"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate);

    if (!isValid) return;

    // Nếu là step cuối → submit
    if (currentStep === 3) {
      await form.handleSubmit(onSubmit)();
      return;
    }

    // Nếu chưa phải step cuối → sang step tiếp
    setCurrentStep((prev) => (prev + 1) as BookingStep);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => (prev - 1) as BookingStep);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <BookingHeader />

      {/* Progress Bar */}
      <Container>
        <ProgressBar currentStep={currentStep} />
      </Container>

      {/* Form Content */}
      <section className="py-6 md:py-10">
        <Container>
          <Form {...form}>
            <form className="max-w-3xl mx-auto" noValidate>
              <AnimatePresence mode="wait">
                {/* STEP 0: Service Selection */}
                {currentStep === 0 && (
                  <Step0_ServiceSelection
                    form={form}
                    selectedExtensions={selectedExtensions}
                    setSelectedExtensions={setSelectedExtensions}
                    onNextStep={handleNextStep}
                  />
                )}

                {/* STEP 1: Car Information */}
                {currentStep === 1 && (
                  <Step1_CarInfo
                    form={form}
                    selectedExtensions={selectedExtensions}
                    setSelectedExtensions={setSelectedExtensions}
                    onNextStep={handleNextStep}
                  />
                )}

                {/* STEP 2: Appointment Details */}
                {currentStep === 2 && (
                  <Step2_AppointmentDetails
                    form={form}
                    selectedExtensions={selectedExtensions}
                    setSelectedExtensions={setSelectedExtensions}
                    onNextStep={handleNextStep}
                  />
                )}

                {/* STEP 3: Personal Information */}
                {currentStep === 3 && (
                  <Step3_PersonalInfo
                    form={form}
                    selectedExtensions={selectedExtensions}
                    setSelectedExtensions={setSelectedExtensions}
                    onNextStep={handleNextStep}
                  />
                )}

                {/* STEP 4: Confirmation */}
                {currentStep === 4 && (
                  <Step4_Confirmation formValues={form.getValues()} />
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
            </form>
            {currentStep < 4 && (
              <FormNavigation
                currentStep={currentStep}
                onPrevStep={handlePrevStep}
                onNextStep={handleNextStep}
                isLoading={isLoading}
              />
            )}
          </Form>
        </Container>
      </section>
    </main>
  );
};

export default BookingWizard;
