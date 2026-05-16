"use client";

import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  sidebarOpen: boolean;
};

export default function MainLayout({
  children,
}: MainLayoutProps) {

  return (
    <div className="min-h-screen">

      <div
        className="
          ml-[115px]
          mr-5
          mt-5
          mb-5
          rounded-[16px]
          bg-[#F5F5F2]
          border
          border-[#E5E5E0]
          shadow-2xl
          min-h-[calc(100vh-40px)]
        "
      >

        {children}

      </div>

    </div>
  );
}