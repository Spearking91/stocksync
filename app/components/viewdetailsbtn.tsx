"use client";
import { ChevronRight } from "@boxicons/react";
import { useRouter } from "next/navigation";

const ViewDetailsBtn = ({ redirectRoute }: { redirectRoute: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(redirectRoute)}
      className="btn btn-sm btn-ghost gap-1 text-primary hover:bg-primary/10 rounded-xl text-xs normal-case"
    >
      View Details
      <ChevronRight className="size-4" />
    </button>
  );
};

export default ViewDetailsBtn;
