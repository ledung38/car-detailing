import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FormData } from "../types";

interface Step4_ConfirmationProps {
  formValues: FormData;
}

export const Step4_Confirmation: React.FC<Step4_ConfirmationProps> = ({
  formValues,
}) => {
  return (
    <AnimateDiv
      key="step-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-8 py-12"
    >
      <AnimateDiv
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <CheckCircle2 className="w-24 h-24 text-blue-500 mx-auto" />
      </AnimateDiv>
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
          <strong>{formValues.email}</strong>
        </p>
        <p className="text-slate-600">
          {`We'll contact you shortly at `}
          <strong>{formValues.phone}</strong> to confirm the final details and
          answer any questions.
        </p>
        <div className="pt-4 border-t border-blue-200/40">
          <p className="text-sm text-slate-500 mb-2">Estimated appointment:</p>
          <p className="font-semibold text-slate-800">
            {formValues.date instanceof Date
              ? formValues.date.toLocaleDateString()
              : ""}{" "}
            at {formValues.time}
          </p>
        </div>
      </div>

      <Link href="/" className="inline-block">
        <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg">
          Back to Home
        </Button>
      </Link>
    </AnimateDiv>
  );
};

export default Step4_Confirmation;
