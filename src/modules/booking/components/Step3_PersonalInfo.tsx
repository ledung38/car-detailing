import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, User } from "lucide-react";
import BookingSummary from "./BookingSummary";
import { SERVICES } from "@/modules/service/contants";
import { StepProps } from "@/modules/booking/types";

export const Step3_PersonalInfo: React.FC<StepProps> = ({
  form,
  selectedExtensions,
}) => {
  const mainServices = SERVICES.slice(0, -1);
  const selectedService = mainServices.find(
    (s) => s.id === form.watch("serviceId"),
  );
  const selectedCarSize = form.watch("carSize");

  return (
    <AnimateDiv
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
                Full Name <span className="text-destructive">*</span>
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
                Email Address <span className="text-destructive">*</span>
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
                Phone Number <span className="text-destructive">*</span>
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
      <BookingSummary
        selectedService={selectedService}
        selectedCarSize={selectedCarSize}
        selectedExtensions={selectedExtensions}
      />
    </AnimateDiv>
  );
};

export default Step3_PersonalInfo;
