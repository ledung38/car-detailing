export function generateEmailHTML(order) {
  const {
    cleanType,
    bedrooms,
    bathrooms,
    storeys,
    laundries,
    customServices = [],
    frequency,
    fullName,
    phone,
    email,
    address,
    date,
    time,
  } = order;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  // Capitalize text
  const toTitle = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");

  return `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #2b6cb0; margin-bottom: 10px;">🔔 New Cleaning Service Order</h2>
    <p style="margin: 0 0 15px;">A new cleaning service order has been received. Below are the details:</p>

    <h3 style="color: #2f855a; margin-bottom: 5px;">Customer Information</h3>
    <div style="padding: 10px 15px; background: #f7fafc; border-radius: 6px; margin-bottom: 20px;">
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
    </div>

    <h3 style="color: #2f855a; margin-bottom: 5px;">Service Details</h3>
    <div style="padding: 10px 15px; background: #f7fafc; border-radius: 6px; margin-bottom: 20px;">
      <p><strong>Cleaning Type:</strong> ${toTitle(cleanType)}</p>
      <p><strong>Bedrooms:</strong> ${bedrooms}</p>
      <p><strong>Bathrooms:</strong> ${bathrooms}</p>
      <p><strong>Storeys:</strong> ${storeys}</p>
      <p><strong>Laundries:</strong> ${laundries}</p>
      <p><strong>Frequency:</strong> ${toTitle(frequency)}</p>
      <p><strong>Preferred Date:</strong> ${formattedDate}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
    </div>

    <h3 style="color: #2f855a; margin-bottom: 5px;">Additional Services</h3>
    <ul style="background: #f7fafc; padding: 12px 18px; border-radius: 6px; list-style: none;">
      ${customServices
        .map(
          (service) =>
            `<li>• ${toTitle(service?.id)} - ${service?.count} unit</li>  `,
        )
        .join("")}
    </ul>

    <p style="margin-top: 25px;">Please proceed to arrange staff and confirm booking with the customer.</p>

    <p style="margin-top: 20px; font-size: 13px; color: #777;">This is an automated message from the booking system.</p>
  </div>
  `;
}
