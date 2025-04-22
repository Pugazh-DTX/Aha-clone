// app/offers/layout.tsx
import React from "react";
import OfferLayout from "@/components/layout/OfferLayout/index"; // adjust the path correctly!

export default function OffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OfferLayout>{children}</OfferLayout>;
}
