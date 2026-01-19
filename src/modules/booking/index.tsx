"use client";

import { generateEmailHTML } from "@/lib/utils/email";
import { bookingFormSchema } from "@/modules/booking/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast as message } from "sonner";

import SectionTitle from "@/components/common/SectionTitle";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { RHFDatePicker } from "@/components/ui/DatePicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { SERVICES } from "@/modules/service/contants";
import {
  ArrowLeft,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";

type FormData = {
  serviceId: string;
  carSize: "S" | "M" | "L";
  carMake: string;
  carModel: string;
  carYear: string;
  carColor: string;
  date: Date;
  time: string;
  address: string;
  fullName: string;
  phone: string;
  email: string;
  extensions?: string[];
  additionalNotes?: string;
};

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
      carYear: "",
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
  // bg-[#c8e1f5]
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <section className="py-8 md:py-12 border-b border-blue-200/40 bg-white/50 backdrop-blur-sm">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <SectionTitle title="Easy Booking" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Book Your Car Detailing
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
            <span className="text-sm font-semibold text-slate-700">
              Step {currentStep + 1} of 4
            </span>
            <span className="text-sm text-slate-500">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="h-2 bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/60">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </Container>

      {/* Form Content */}
      <section className="py-6 md:py-10">
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
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">
                          Select Your Service
                        </h2>
                        <p className="text-slate-600">
                          Choose the detailing package that best suits your
                          needs
                        </p>
                      </div>
                    </div>

                    {/* Service Grid */}
                    <FormField
                      control={form.control}
                      name="serviceId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {mainServices.map((service, idx) => (
                                <motion.div
                                  key={service.id}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  whileHover={{ scale: 1.02, y: -4 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => field.onChange(service.id)}
                                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 overflow-hidden relative ${
                                    field.value === service.id
                                      ? "border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 ring-2 ring-blue-200 shadow-lg shadow-blue-100"
                                      : "border-slate-200/80 bg-white/80 hover:border-blue-300 hover:shadow-lg shadow-sm"
                                  }`}
                                >
                                  {field.value === service.id && (
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-bl-full" />
                                  )}
                                  <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                      <div>
                                        <h3 className="text-lg font-bold text-slate-800">
                                          {service.title}
                                        </h3>
                                      </div>
                                      {field.value === service.id && (
                                        <motion.div
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0"
                                        >
                                          <CheckCircle2 className="w-6 h-6 text-white" />
                                        </motion.div>
                                      )}
                                    </div>
                                    <p className="text-sm text-slate-600 mb-4">
                                      {service.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <p className="text-xs text-slate-500 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-blue-500" />
                                        {service.duration}
                                      </p>
                                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        Detailing
                                      </span>
                                    </div>
                                  </div>
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
                        className="space-y-4 p-6 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-xl border border-blue-200/50"
                      >
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          <Shield className="w-6 h-6 text-blue-600" />
                          {`What's Your Car Size?`}
                        </h3>
                        <FormField
                          control={form.control}
                          name="carSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-3 gap-4">
                                  {["S", "M", "L"].map((size, sizeIdx) => {
                                    const price = extractPrice(
                                      selectedService.priceRange,
                                      size as "S" | "M" | "L",
                                    );
                                    const sizeEmoji =
                                      size === "S"
                                        ? "🚗"
                                        : size === "M"
                                          ? "🚙"
                                          : "🚐";
                                    return (
                                      <motion.button
                                        key={size}
                                        type="button"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                          delay: 0.2 + sizeIdx * 0.05,
                                        }}
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => field.onChange(size)}
                                        className={`p-5 rounded-xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                                          field.value === size
                                            ? "border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 ring-2 ring-blue-200 shadow-lg"
                                            : "border-slate-200/80 bg-white/80 hover:border-blue-300 hover:shadow-md"
                                        }`}
                                      >
                                        {field.value === size && (
                                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-cyan-200/10" />
                                        )}
                                        <div className="relative z-10">
                                          <div className="text-3xl mb-2">
                                            {sizeEmoji}
                                          </div>
                                          <div className="font-bold text-slate-800 mb-2">
                                            {size === "S" && "Small"}
                                            {size === "M" && "Medium"}
                                            {size === "L" && "Large"}
                                          </div>
                                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                            ${price}
                                          </div>
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
                        className="space-y-4 p-6 bg-gradient-to-br from-secondary/10 to-pink-50/50 rounded-xl border border-secondary/30"
                      >
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          <Award className="w-6 h-6 text-secondary" />
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
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                          selectedExtensions.includes(option)
                                            ? "border-secondary bg-secondary/10 shadow-md"
                                            : "border-slate-200/80 bg-white/60 hover:border-secondary"
                                        }`}
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
                                        <div className="flex-1">
                                          <p className="text-slate-800 font-medium">
                                            {option}
                                          </p>
                                          <p className="text-xs text-slate-500">
                                            Premium add-on service
                                          </p>
                                        </div>
                                        {selectedExtensions.includes(
                                          option,
                                        ) && (
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-600 to-secondary flex items-center justify-center flex-shrink-0"
                                          >
                                            <Check
                                              size={14}
                                              className="text-white"
                                            />
                                          </motion.div>
                                        )}
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
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">
                          Tell Us About Your Car
                        </h2>
                        <p className="text-slate-600">
                          Help us prepare the right products for your vehicle
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <FormField
                          control={form.control}
                          name="carMake"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                🏎️ Car Make{" "}
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Toyota, BMW, Mercedes"
                                  {...field}
                                  className="h-12 border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 hover:border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <FormField
                          control={form.control}
                          name="carModel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                🔧 Car Model{" "}
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Camry, 3 Series, C-Class"
                                  {...field}
                                  className="h-12 border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 hover:border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <FormField
                          control={form.control}
                          name="carYear"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                📅 Year <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., 2020"
                                  type="number"
                                  {...field}
                                  className="h-12 border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 hover:border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <FormField
                          control={form.control}
                          name="carColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                🎨 Color <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g., Black, White, Red"
                                  {...field}
                                  className="h-12 border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 hover:border-orange-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <FormField
                        control={form.control}
                        name="additionalNotes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-800 font-semibold flex items-center gap-2">
                              💭 Additional Notes (Optional)
                            </FormLabel>
                            <FormControl>
                              <textarea
                                placeholder="Any specific areas of concern? Pet hair, stains, odors, etc."
                                {...field}
                                className="w-full p-4 rounded-lg border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200/50 min-h-24 resize-none hover:border-orange-300 transition"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
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
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">
                          Schedule Your Appointment
                        </h2>
                        <p className="text-slate-600">
                          Choose your preferred date and time for your car
                          detailing
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                      >
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                <Calendar className="w-5 h-5 text-blue-500" />
                                Preferred Date{" "}
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <RHFDatePicker
                                  name="date"
                                  placeholder="dd/mm/yyyy"
                                  formatString="dd/MM/yyyy"
                                  clearable={false}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="relative"
                      >
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                                <Clock className="w-5 h-5 text-cyan-500" />
                                Preferred Time{" "}
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <input
                                  type="time"
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-full px-4 py-3 text-background border border-border rounded-lg bg-white/80 focus:outline-none focus:border-primary transition hover:text-primary hover:border-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-slate-800 font-semibold">
                              <MapPin className="w-5 h-5 text-orange-500" />
                              Service Address{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <textarea
                                placeholder="Enter your full address including suburb and postcode"
                                {...field}
                                className="w-full p-4 rounded-lg border-2 border-slate-200 bg-white/80 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200/50 min-h-24 resize-none hover:border-orange-300 transition"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    {/* Info Cards */}
                    {/* <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="grid grid-cols-2 gap-4 mt-8"
                    >
                      <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-900">
                            Quick Service
                          </span>
                        </div>
                        <p className="text-xs text-green-700">
                          Same-day appointments available
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-900">
                            Fast Confirmation
                          </span>
                        </div>
                        <p className="text-xs text-blue-700">
                          {`We'll contact you within 2 hours`}
                        </p>
                      </div>
                    </motion.div> */}
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
                      <h2 className="text-3xl font-bold text-slate-800 mb-2">
                        Your Contact Information
                      </h2>
                      <p className="text-slate-600">
                        {`We'll use this to confirm your booking`}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-slate-800">
                              <User className="w-4 h-4" />
                              Full Name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                {...field}
                                className="h-12 border-slate-200 bg-white/60 text-slate-800 placeholder:text-slate-400"
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
                            <FormLabel className="flex items-center gap-2 text-slate-800">
                              <Mail className="w-4 h-4" />
                              Email Address{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                className="h-12 border-slate-200 bg-white/60 text-slate-800 placeholder:text-slate-400"
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
                            <FormLabel className="flex items-center gap-2 text-slate-800">
                              <Phone className="w-4 h-4" />
                              Phone Number{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="e.g., 0412 345 678"
                                {...field}
                                className="h-12 border-slate-200 bg-white/60 text-slate-800 placeholder:text-slate-400"
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
                      className="p-6 rounded-xl border border-blue-200/60 bg-blue-50/50 space-y-4"
                    >
                      <h3 className="font-bold text-slate-800 text-lg">
                        Booking Summary
                      </h3>
                      <div className="space-y-3 text-sm">
                        {selectedService && (
                          <div className="flex justify-between items-start">
                            <span className="text-slate-600">Service:</span>
                            <span className="font-semibold text-slate-800">
                              {selectedService.title}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between items-start">
                          <span className="text-slate-600">Size:</span>
                          <span className="font-semibold text-slate-800">
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
                          <div className="flex justify-between items-start border-t border-blue-200/40 pt-3">
                            <span className="text-slate-600">Add-ons:</span>
                            <div className="text-right">
                              {selectedExtensions.map((ext, idx) => (
                                <div
                                  key={idx}
                                  className="text-slate-800 text-xs"
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
                      <CheckCircle2 className="w-24 h-24 text-blue-500 mx-auto" />
                    </motion.div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold text-slate-800">
                        Booking Confirmed!
                      </h2>
                      <p className="text-xl text-slate-600">
                        Thank you for choosing Sky Nice Detailing
                      </p>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-200/60 rounded-xl p-8 text-left space-y-4 max-w-2xl mx-auto">
                      <p className="text-slate-600">
                        A confirmation email has been sent to{" "}
                        <strong>{form.getValues("email")}</strong>
                      </p>
                      <p className="text-slate-600">
                        {`We'll contact you shortly at `}
                        <strong>{form.getValues("phone")}</strong> to confirm
                        the final details and answer any questions.
                      </p>
                      <div className="pt-4 border-t border-blue-200/40">
                        <p className="text-sm text-slate-500 mb-2">
                          Estimated appointment:
                        </p>
                        <p className="font-semibold text-slate-800">
                          {form.getValues("date") instanceof Date
                            ? form.getValues("date").toLocaleDateString()
                            : ""}{" "}
                          at {form.getValues("time")}
                        </p>
                      </div>
                    </div>

                    <Link href="/" className="inline-block">
                      <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg">
                        Back to Home
                      </Button>
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
                    className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-100"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === 3 ? (
                    <Button
                      type="submit"
                      className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg"
                    >
                      <span>Complete Booking</span>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg"
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
