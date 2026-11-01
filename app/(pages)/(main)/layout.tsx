import Sidebar from "@/app/components/sidebar";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <Sidebar>{children}</Sidebar>
    </Suspense>
  );
}
