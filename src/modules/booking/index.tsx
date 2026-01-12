"use client";

import { generateEmailHTML } from "@/lib/utils/email";
import { bookingFormSchema } from "@/modules/booking/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast as message } from "sonner";
import { SERVICES } from "@/modules/service/contants";
import { Container } from "@/components/ui";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import Link from "next/link";

export interface FormData {
  // Step 1: Service Selection
  serviceId: string;
  carSize: "S" | "M" | "L";
  extensions: string[];

  // Step 2: Car Information
  carMake: string;
  carModel: string;
  carYear: string;
  carColor: string;
  additionalNotes: string;

  // Step 3: Appointment Details
  date: Date;
  time: string;
  address: string;

  // Step 4: Personal Information
  fullName: string;
  email: string;
  phone: string;
}

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceId: "",
      carSize: "M",
      extensions: [],
      carMake: "",
      carModel: "",
      carYear: new Date().getFullYear().toString(),
      carColor: "",
      additionalNotes: "",
      time: "",
      address: "",
      email: "",
      phone: "",
      fullName: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  // Get extension options
  const extensionOptions = SERVICES[SERVICES.length - 1];
  const mainServices = SERVICES.slice(0, -1);

  const selectedService = mainServices.find(
    (s) => s.id === form.watch("serviceId"),
  );
  const selectedCarSize = form.watch("carSize");

  const extractPrice = (priceRange: string, size: "S" | "M" | "L") => {
    const parts = priceRange.split("|");
    const sizeIndex = { S: 0, M: 1, L: 2 }[size];
    return parts[sizeIndex]?.match(/\$(\d+)/)?.[1] || "Contact";
  };

  async function onSubmit(values: FormData) {
    try {
      const content = generateEmailHTML({
        ...values,
        serviceName: selectedService?.title,
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
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border/40">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <SectionTitle title="Easy Booking" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Book Your Car Detailing
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Get your car looking showroom fresh. Just 4 simple steps to
              schedule your appointment.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Progress Bar */}
      <Container>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-foreground">
              Step {currentStep + 1} of 4
            </span>
            <span className="text-sm text-foreground/60">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="h-2 bg-card rounded-full overflow-hidden border border-border/40">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </Container>

      {/* Form Content */}
      <section className="py-8 md:py-16">
        <Container>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-3xl mx-auto"
            >
              <AnimatePresence mode="wait">
                {/* STEP 1: Service Selection */}
                {currentStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        Select Your Service
                      </h2>
                      <p className="text-foreground/70">
                        Choose the detailing package that best suits your needs
                      </p>
                    </div>

                    {/* Service Grid */}
                    <FormField
                      control={form.control}
                      name="serviceId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {mainServices.map((service) => (
                                <motion.div
                                  key={service.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => field.onChange(service.id)}
                                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                    field.value === service.id
                                      ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                                      : "border-border/40 bg-card hover:border-primary/50"
                                  }`}
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg font-bold text-foreground">
                                      {service.title}
                                    </h3>
                                    {field.value === service.id && (
                                      <CheckCircle2 className="w-6 h-6 text-primary" />
                                    )}
                                  </div>
                                  <p className="text-sm text-foreground/70 mb-4">
                                    {service.description}
                                  </p>
                                  <p className="text-xs text-foreground/60 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {service.duration}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Car Size Selection */}
                    {selectedService && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-bold text-foreground">
                          What's Your Car Size?
                        </h3>
                        <FormField
                          control={form.control}
                          name="carSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-3 gap-4">
                                  {["S", "M", "L"].map((size) => {
                                    const price = extractPrice(
                                      selectedService.priceRange,
                                      size as "S" | "M" | "L",
                                    );
                                    return (
                                      <motion.button
                                        key={size}
                                        type="button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => field.onChange(size)}
                                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                                          field.value === size
                                            ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                                            : "border-border/40 bg-card hover:border-primary/50"
                                        }`}
                                      >
                                        <div className="font-bold text-foreground mb-2">
                                          {size === "S" && "Small"}
                                          {size === "M" && "Medium"}
                                          {size === "L" && "Large"}
                                        </div>
                                        <div className="text-2xl font-bold text-primary">
                                          ${price}
                                        </div>
                                      </motion.button>
                                    );
                                  })}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Extensions Selection */}
                    {selectedService && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-bold text-foreground">
                          Add Premium Options
                        </h3>
                        <FormField
                          control={form.control}
                          name="extensions"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-1 gap-3">
                                  {extensionOptions.highlights.map(
                                    (option, idx) => (
                                      <motion.label
                                        key={idx}
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/50 cursor-pointer transition-all duration-300"
                                      >
                                        <Checkbox
                                          checked={selectedExtensions.includes(
                                            option,
                                          )}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              const newExt = [
                                                ...selectedExtensions,
                                                option,
                                              ];
                                              setSelectedExtensions(newExt);
                                              field.onChange(newExt);
                                            } else {
                                              const newExt =
                                                selectedExtensions.filter(
                                                  (ext) => ext !== option,
                                                );
                                              setSelectedExtensions(newExt);
                                              field.onChange(newExt);
                                            }
                                          }}
                                        />
                                        <span className="text-foreground font-medium flex-1">
                                          {option}
                                        </span>
                                      </motion.label>
                                    ),
                                  )}
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP 2: Car Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        Tell Us About Your Car
                      </h2>
                      <p className="text-foreground/70">
                        Help us prepare the right products for your vehicle
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="carMake"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              Car Make{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Toyota, BMW, Mercedes"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="carModel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              Car Model{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Camry, 3 Series, C-Class"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="carYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              Year <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., 2020"
                                type="number"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="carColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              Color <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Black, White, Red"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Any specific areas of concern? Pet hair, stains, odors, etc."
                              {...field}
                              className="w-full p-4 rounded-lg border border-border/40 bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-24 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* STEP 3: Appointment Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        Schedule Your Appointment
                      </h2>
                      <p className="text-foreground/70">
                        Choose your preferred date and time
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Preferred Date{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                value={
                                  field.value instanceof Date
                                    ? field.value.toISOString().split("T")[0]
                                    : ""
                                }
                                onChange={(e) => {
                                  field.onChange(new Date(e.target.value));
                                }}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Preferred Time{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <option value="">Select a time</option>
                                {[
                                  "8:00 AM",
                                  "9:00 AM",
                                  "10:00 AM",
                                  "11:00 AM",
                                  "12:00 PM",
                                  "1:00 PM",
                                  "2:00 PM",
                                  "3:00 PM",
                                  "4:00 PM",
                                  "5:00 PM",
                                ].map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Service Address{" "}
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Enter your full address including suburb and postcode"
                              {...field}
                              className="w-full p-4 rounded-lg border border-border/40 bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-24 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* STEP 4: Personal Information */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        Your Contact Information
                      </h2>
                      <p className="text-foreground/70">
                        We'll use this to confirm your booking
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Full Name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className="h-12"
                              />
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
                            <FormLabel className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              Email Address{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Phone Number{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="e.g., 0412 345 678"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Booking Summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-xl border border-primary/30 bg-primary/5 space-y-4"
                    >
                      <h3 className="font-bold text-foreground text-lg">
                        Booking Summary
                      </h3>
                      <div className="space-y-3 text-sm">
                        {selectedService && (
                          <div className="flex justify-between items-start">
                            <span className="text-foreground/70">Service:</span>
                            <span className="font-semibold text-foreground">
                              {selectedService.title}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-start">
                          <span className="text-foreground/70">Size:</span>
                          <span className="font-semibold text-foreground">
                            {selectedCarSize === "S" && "Small"}
                            {selectedCarSize === "M" && "Medium"}
                            {selectedCarSize === "L" && "Large"} ($
                            {extractPrice(
                              selectedService?.priceRange || "",
                              selectedCarSize,
                            )}
                            )
                          </span>
                        </div>
                        {selectedExtensions.length > 0 && (
                          <div className="flex justify-between items-start border-t border-primary/20 pt-3">
                            <span className="text-foreground/70">Add-ons:</span>
                            <div className="text-right">
                              {selectedExtensions.map((ext, idx) => (
                                <div
                                  key={idx}
                                  className="text-foreground text-xs"
                                >
                                  {ext}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* STEP 5: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-8 py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle2 className="w-24 h-24 text-accent mx-auto" />
                    </motion.div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold text-foreground">
                        Booking Confirmed!
                      </h2>
                      <p className="text-xl text-foreground/70">
                        Thank you for choosing Sky Nice Detailing
                      </p>
                    </div>

                    <div className="bg-card border border-primary/30 rounded-xl p-8 text-left space-y-4 max-w-2xl mx-auto">
                      <p className="text-foreground/70">
                        A confirmation email has been sent to{" "}
                        <strong>{form.getValues("email")}</strong>
                      </p>
                      <p className="text-foreground/70">
                        We'll contact you shortly at{" "}
                        <strong>{form.getValues("phone")}</strong> to confirm
                        the final details and answer any questions.
                      </p>
                      <div className="pt-4 border-t border-border/40">
                        <p className="text-sm text-foreground/60 mb-2">
                          Estimated appointment:
                        </p>
                        <p className="font-semibold text-foreground">
                          {form.getValues("date") instanceof Date
                            ? form.getValues("date").toLocaleDateString()
                            : ""}{" "}
                          at {form.getValues("time")}
                        </p>
                      </div>
                    </div>

                    <Link href="/" className="inline-block">
                      <Button className="h-12 px-8">Back to Home</Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4 justify-between mt-12"
                >
                  <Button
                    type="button"
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                    variant="outline"
                    className="h-12 px-8"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === 3 ? (
                    <Button
                      type="submit"
                      className="h-12 px-8 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
                    >
                      <span>Complete Booking</span>
                      <CheckIcon className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="h-12 px-8 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
                    >
                      <span>Next Step</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </motion.div>
              )}
            </form>
          </Form>
        </Container>
      </section>
    </main>
  );
};

export default BookingWizard;
