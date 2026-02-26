export const extractPrice = (priceRange: string, size: "S" | "M" | "L") => {
  const parts = priceRange.split("|");
  const sizeIndex = { S: 0, M: 1, L: 2 }[size];
  return parts[sizeIndex]?.match(/\$(\d+)/)?.[1] || "Contact";
};

export const generateBookingSummary = (
  selectedService: any,
  selectedCarSize: "S" | "M" | "L",
  selectedExtensions: string[],
  priceRange?: string,
) => {
  const price = selectedService?.priceRange
    ? extractPrice(selectedService.priceRange, selectedCarSize)
    : "Contact";

  return {
    service: selectedService?.title || "",
    size:
      selectedCarSize === "S"
        ? "Small"
        : selectedCarSize === "M"
          ? "Medium"
          : "Large",
    price,
    extensions: selectedExtensions,
  };
};
