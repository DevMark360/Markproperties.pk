import type { ProjectPrice } from "@/types/content";

const PKR_UNITS = [
  { value: 10_000_000, label: "Crore" },
  { value: 100_000, label: "Lac" },
] as const;

const integerFormatter = new Intl.NumberFormat("en-US");

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Karachi",
});

/** Formats a rupee amount using the Pakistani lac/crore convention, e.g. 14_900_000 → "PKR 1.49 Crore". */
export function formatPKR(amount: number): string {
  const unit = PKR_UNITS.find(({ value }) => amount >= value);
  if (!unit) return `PKR ${integerFormatter.format(amount)}`;
  return `PKR ${Number((amount / unit.value).toFixed(2))} ${unit.label}`;
}

export function formatPriceLabel(price?: ProjectPrice): { label: string; value: string } {
  if (!price) return { label: "Price", value: "On request" };
  return { label: price.basis === "booking" ? "Booking from" : "From", value: formatPKR(price.amount) };
}

export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate));
}
