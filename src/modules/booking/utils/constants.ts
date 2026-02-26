export const BOOKING_STEPS = {
  SERVICE_SELECTION: 0,
  CAR_INFO: 1,
  APPOINTMENT_DETAILS: 2,
  PERSONAL_INFO: 3,
  CONFIRMATION: 4,
} as const;

export const STEP_LABELS = {
  [BOOKING_STEPS.SERVICE_SELECTION]: "Select Your Service",
  [BOOKING_STEPS.CAR_INFO]: "Tell Us About Your Car",
  [BOOKING_STEPS.APPOINTMENT_DETAILS]: "Schedule Your Appointment",
  [BOOKING_STEPS.PERSONAL_INFO]: "Your Contact Information",
  [BOOKING_STEPS.CONFIRMATION]: "Booking Confirmed!",
} as const;

export const CAR_SIZES = {
  S: { label: "Small", emoji: "🚗", shorthand: "S" },
  M: { label: "Medium", emoji: "🚙", shorthand: "M" },
  L: { label: "Large", emoji: "🚐", shorthand: "L" },
} as const;
