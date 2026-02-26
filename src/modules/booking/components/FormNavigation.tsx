import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { ArrowRightIcon } from "@/components/icons";

interface FormNavigationProps {
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  isLoading?: boolean;
}

export const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  onPrevStep,
  onNextStep,
  isLoading = false,
}) => {
  if (currentStep >= 4) return null;

  return (
    <AnimateDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 justify-between mt-12"
    >
      <Button
        type="button"
        onClick={onPrevStep}
        disabled={currentStep === 0}
        variant="outline"
        className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-100"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>

      {currentStep === 3 ? (
        <Button
          type="button"
          disabled={isLoading}
          onClick={onNextStep}
          className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg"
        >
          <span>{isLoading ? "Processing..." : "Complete Booking"}</span>
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNextStep}
          className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-lg"
        >
          <span>Next Step</span>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      )}
    </AnimateDiv>
  );
};

export default FormNavigation;
