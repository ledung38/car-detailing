export const generateEmailHTML = (data: {
  serviceId: string;
  serviceName: string;
  carSize: "S" | "M" | "L";
  extensions?: string[];
  extensionNames?: string[];
  carMake: string;
  carModel: string;
  carYear: string;
  carColor: string;
  additionalNotes?: string;
  date: Date; // ISO string
  time: string;
  address: string;
  fullName: string;
  phone: string;
  email: string;
}) => {
  const {
    serviceName,
    carSize,
    carMake,
    carModel,
    carYear,
    carColor,
    date,
    time,
    address,
    fullName,
    phone,
    email,
    extensionNames = [],
    additionalNotes,
  } = data;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `
  <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #222; max-width: 600px; margin: auto; border-radius: 10px; border: 1px solid #e5e5e5; overflow: hidden;">
    <div style="background-color: #0d6efd; color: #fff; padding: 16px 24px;">
      <h2 style="margin: 0;">Booking Confirmation</h2>
      <p style="margin: 4px 0 0;">${serviceName}</p>
    </div>
    
    <div style="padding: 24px;">
      <h3 style="margin-bottom: 12px;">Customer Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 6px 0; width: 130px;"><strong>Full Name:</strong></td><td>${fullName}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Address:</strong></td><td>${address}</td></tr>
      </table>

      <h3 style="margin-bottom: 12px;">Vehicle Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 6px 0; width: 130px;"><strong>Car Make:</strong></td><td>${carMake}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Model:</strong></td><td>${carModel}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Year:</strong></td><td>${carYear}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Color:</strong></td><td>${carColor}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Size:</strong></td><td>${carSize}</td></tr>
      </table>

      <h3 style="margin-bottom: 12px;">Booking Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 6px 0; width: 130px;"><strong>Date:</strong></td><td>${formattedDate}</td></tr>
        <tr><td style="padding: 6px 0;"><strong>Time:</strong></td><td>${time}</td></tr>
      </table>

      ${
        extensionNames.length
          ? `
      <h3 style="margin-bottom: 12px;">Add-on Services</h3>
      <ul style="margin: 0 0 16px 16px; padding: 0; list-style: disc; color: #333;">
        ${extensionNames.map((e) => `<li>${e}</li>`).join("")}
      </ul>`
          : ""
      }

      ${
        additionalNotes
          ? `
      <h3 style="margin-bottom: 12px;">Additional Notes</h3>
      <p style="margin: 0 0 16px;">${additionalNotes}</p>`
          : ""
      }

      <div style="text-align: center; padding-top: 16px; border-top: 1px solid #ddd;">
        <p style="margin: 0; font-size: 14px; color: #666;">Thank you for choosing our detailing service!</p>
      </div>
    </div>
  </div>`;
};
