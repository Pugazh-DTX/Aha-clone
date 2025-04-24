// src/components/ClientLayout.tsx
"use client";

import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/store/store";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const showHeader = useSelector((state: RootState) => state.layout.showHeader);
  const showFooter = useSelector((state: RootState) => state.layout.showFooter);

  return (
    <Provider store={store}>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </Provider>
  );
}
