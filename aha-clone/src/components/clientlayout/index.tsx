// src/components/ClientLayout.tsx
"use client";

import { Provider, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { NAVBAR_HIDE_ROUTES, FOOTER_HIDE_ROUTES } from "@/utils/layoutConstants";
import { RootState, store } from "@/store/store";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showHeaderFromRedux = useSelector((state: RootState) => state.layout.showHeader);
  const showFooterFromRedux = useSelector((state: RootState) => state.layout.showFooter);

  const hideHeaderByRoute = NAVBAR_HIDE_ROUTES.some(route => pathname.startsWith(route));
  const hideFooterByRoute = FOOTER_HIDE_ROUTES.some(route => pathname.startsWith(route));
  
  const shouldShowHeader = showHeaderFromRedux && !hideHeaderByRoute;
  const shouldShowFooter = showFooterFromRedux && !hideFooterByRoute;
  

  return (
    <Provider store={store}>
      {shouldShowHeader && <Header />}
      {children}
      {shouldShowFooter && <Footer />}
    </Provider>
  );
}
