export type FormData = {
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

export type BookingStep = 0 | 1 | 2 | 3 | 4;

export type BookingState = {
  currentStep: BookingStep;
  selectedExtensions: string[];
};

export interface StepProps {
  form: any; // UseFormReturn type from react-hook-form
  selectedExtensions: string[];
  setSelectedExtensions: (extensions: string[]) => void;
  onNextStep: () => void;
}
