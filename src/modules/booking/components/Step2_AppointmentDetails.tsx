import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { RHFDatePicker } from "@/components/ui/DatePicker";
import { Calendar, Clock, MapPin } from "lucide-react";
import { StepProps } from "@/modules/booking/types";

export const Step2_AppointmentDetails: React.FC<StepProps> = ({ form }) => {
  return (
    <AnimateDiv
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
            Choose your preferred date and time for your car detailing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimateDiv
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
                  Preferred Date <span className="text-red-500">*</span>
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
        </AnimateDiv>

        <AnimateDiv
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
                  Preferred Time <span className="text-red-500">*</span>
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
        </AnimateDiv>
      </div>

      <AnimateDiv
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
                Service Address <span className="text-red-500">*</span>
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
      </AnimateDiv>
    </AnimateDiv>
  );
};

export default Step2_AppointmentDetails;
