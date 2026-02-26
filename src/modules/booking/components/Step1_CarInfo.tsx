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
import { Mail } from "lucide-react";
import { StepProps } from "@/modules/booking/types";

export const Step1_CarInfo: React.FC<StepProps> = ({ form }) => {
  return (
    <AnimateDiv
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
        <AnimateDiv
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
                  🏎️ Car Make <span className="text-red-500">*</span>
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
        </AnimateDiv>

        <AnimateDiv
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
                  🔧 Car Model <span className="text-red-500">*</span>
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
        </AnimateDiv>

        <AnimateDiv
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
        </AnimateDiv>

        <AnimateDiv
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
        </AnimateDiv>
      </div>

      <AnimateDiv
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
      </AnimateDiv>
    </AnimateDiv>
  );
};

export default Step1_CarInfo;
