import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import { Container } from "@/components/ui";

interface ProgressBarProps {
  currentStep: number;
  totalSteps?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps = 4,
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <Container>
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-slate-700">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-sm text-slate-500">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="h-2 bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/60">
          <AnimateDiv
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProgressBar;
