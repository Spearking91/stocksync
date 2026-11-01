import ShopSidebar from "@/app/components/shopsidebar";
import { Suspense } from "react";

export default function HubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <ShopSidebar>{children}</ShopSidebar>
    </Suspense>
  );
}
