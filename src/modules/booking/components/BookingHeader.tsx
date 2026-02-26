import React from "react";
import { AnimateDiv } from "@/components/common/Animate";
import SectionTitle from "@/components/common/SectionTitle";
import { Container } from "@/components/ui";

export const BookingHeader: React.FC = () => {
  return (
    <section className="py-8 md:py-12 border-b border-blue-200/40 bg-white/50 backdrop-blur-sm">
      <Container>
        <AnimateDiv
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
            Get your car looking showroom fresh. Just 4 simple steps to schedule
            your appointment.
          </p>
        </AnimateDiv>
      </Container>
    </section>
  );
};

export default BookingHeader;
