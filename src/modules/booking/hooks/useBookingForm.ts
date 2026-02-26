import { FormData } from "@/modules/booking/types";
import { bookingFormSchema } from "@/modules/booking/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useBookingForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceId: "",
      carSize: "M",
      extensions: [],
      carMake: "",
      carModel: "",
      carYear: "",
      carColor: "",
      additionalNotes: "",
      time: "",
      address: "",
      email: "",
      phone: "",
      fullName: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return form;
};
