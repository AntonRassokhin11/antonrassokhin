"use client";

import { Search } from "lucide-react";

type HeaderProps = {
  compact?: boolean;
};

export default function Header({
  compact = false,
}: HeaderProps) {
  return (
    <div
      className={`
        rounded-[16px]
        border
        border-white
        bg-[#0B1F3B]
        shadow-2xl
        transition-all
        duration-500
        ${
          compact
            ? "h-[110px]"
            : "h-[150px]"
        }
      `}
    >
      <div className="h-full flex items-center justify-between px-10">

        {/* LOGO */}
        <button className="text-white hover:opacity-80 transition leading-none">

          <div className="text-4xl font-bold">
            AR
          </div>

          <div className="text-sm font-bold tracking-wide mt-1">
            Musiknoten
          </div>

        </button>

        {/* SEARCH */}
        <div className="relative w-[520px]">

          <input
            className="
              w-full
              h-12
              rounded-full
              bg-white
              px-14
              text-black
              outline-none
              border
              border-transparent
              focus:border-black
              transition-all
            "
          />

          <Search
            size={20}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-gray-500
            "
          />

        </div>

        <div className="w-[80px]" />

      </div>
    </div>
  );
}