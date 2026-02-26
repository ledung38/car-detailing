import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import { extractPrice } from "@/modules/booking/utils/price";

interface BookingSummaryProps {
  selectedService: any;
  selectedCarSize: "S" | "M" | "L";
  selectedExtensions: string[];
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedService,
  selectedCarSize,
  selectedExtensions,
}) => {
  const sizeLabels = {
    S: "Small",
    M: "Medium",
    L: "Large",
  };

  return (
    <AnimateDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-xl border border-blue-200/60 bg-blue-50/50 space-y-4"
    >
      <h3 className="font-bold text-slate-800 text-lg">Booking Summary</h3>
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
            {sizeLabels[selectedCarSize]} ($
            {extractPrice(selectedService?.priceRange || "", selectedCarSize)})
          </span>
        </div>
        {selectedExtensions.length > 0 && (
          <div className="flex justify-between items-start border-t border-blue-200/40 pt-3">
            <span className="text-slate-600">Add-ons:</span>
            <div className="text-right">
              {selectedExtensions.map((ext, idx) => (
                <div key={idx} className="text-slate-800 text-xs">
                  {ext}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimateDiv>
  );
};

export default BookingSummary;
