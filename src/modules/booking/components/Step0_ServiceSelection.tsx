import React from "react";
import {
  AnimateDiv,
  AnimateButton,
  AnimateLabel,
} from "@/components/common/Animate";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  Award,
  Check,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/modules/service/contants";
import { extractPrice } from "../utils/price";
import { StepProps } from "@/modules/booking/types";

export const Step0_ServiceSelection: React.FC<StepProps> = ({
  form,
  selectedExtensions,
  setSelectedExtensions,
}) => {
  const extensionOptions = SERVICES[SERVICES.length - 1];
  const mainServices = SERVICES.slice(0, -1);

  const selectedService = mainServices.find(
    (s) => s.id === form.watch("serviceId"),
  );

  return (
    <AnimateDiv
      key="step-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Select Your Service
          </h2>
          <p className="text-slate-600">
            Choose the detailing package that best suits your needs
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
                  <AnimateDiv
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
                          <AnimateDiv
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0"
                          >
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </AnimateDiv>
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
                  </AnimateDiv>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Car Size Selection */}
      {selectedService && (
        <AnimateDiv
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
                        size === "S" ? "🚗" : size === "M" ? "🚙" : "🚐";
                      return (
                        <AnimateButton
                          key={size}
                          type="button"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + sizeIdx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => field.onChange(size)}
                          className={`p-2 sm:p-5 rounded-xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                            field.value === size
                              ? "border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 ring-2 ring-blue-200 shadow-lg"
                              : "border-slate-200/80 bg-white/80 hover:border-blue-300 hover:shadow-md"
                          }`}
                        >
                          {field.value === size && (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-cyan-200/10" />
                          )}
                          <div className="relative z-10">
                            <div className="text-3xl mb-2">{sizeEmoji}</div>
                            <div className="font-bold text-slate-800 mb-2">
                              {size === "S" && "Small"}
                              {size === "M" && "Medium"}
                              {size === "L" && "Large"}
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                              ${price}
                            </div>
                          </div>
                        </AnimateButton>
                      );
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </AnimateDiv>
      )}

      {/* Extensions Selection */}
      {selectedService && (
        <AnimateDiv
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
                    {extensionOptions.highlights.map((option, idx) => (
                      <AnimateLabel
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
                          checked={selectedExtensions.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              const newExt = [...selectedExtensions, option];
                              setSelectedExtensions(newExt);
                              field.onChange(newExt);
                            } else {
                              const newExt = selectedExtensions.filter(
                                (ext) => ext !== option,
                              );
                              setSelectedExtensions(newExt);
                              field.onChange(newExt);
                            }
                          }}
                        />
                        <div className="flex-1">
                          <p className="text-slate-800 font-medium">{option}</p>
                          <p className="text-xs text-slate-500">
                            Premium add-on service
                          </p>
                        </div>
                        {selectedExtensions.includes(option) && (
                          <AnimateDiv
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-600 to-secondary flex items-center justify-center flex-shrink-0"
                          >
                            <Check size={14} className="text-white" />
                          </AnimateDiv>
                        )}
                      </AnimateLabel>
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </AnimateDiv>
      )}
    </AnimateDiv>
  );
};

export default Step0_ServiceSelection;
