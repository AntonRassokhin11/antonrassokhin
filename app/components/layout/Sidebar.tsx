"use client";

import { useEffect, useRef } from "react";

type SidebarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Sidebar({
  open,
  setOpen,
}: SidebarProps) {

  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // OPEN WITH DELAY
  const handleEnter = () => {

    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    openTimeout.current = setTimeout(() => {
      setOpen(true);
    }, 180);
  };

  // CLOSE WITH DELAY
  const handleLeave = () => {

    if (openTimeout.current) {
      clearTimeout(openTimeout.current);
    }

    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }

      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (

    <>
      {/* HOVER ZONE */}
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`
          fixed
          left-5
          top-[175px]
          z-40
          transition-all
          duration-500
          ${
            open
              ? "w-[320px]"
              : "w-[90px]"
          }
        `}
        style={{
          height: "calc(100vh - 195px)",
        }}
      >

        {/* SIDEBAR */}
        <div
          className={`
            h-full
            rounded-[16px]
            border
            border-white
            bg-[#0A0A0A]
            shadow-2xl
            transition-all
            duration-500
            overflow-hidden
            ${
              open
                ? "w-[240px]"
                : "w-[90px]"
            }
          `}
        >

          <div className="p-6">

            {/* MENU */}
            <div
              className="
                text-white
                text-sm
                font-bold
                tracking-[0.28em]
                text-center
              "
            >
              MENÜ
            </div>

            {/* LINKS */}
            <div
              className={`
                mt-10
                space-y-6
                whitespace-nowrap
                transition-all
                duration-300
                ${
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }
              `}
            >

              {[
                "Beliebte",
                "Letzte Herausgaben",
                "Über mich",
                "Kontakt",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    text-white
                    cursor-pointer
                    hover:text-gray-300
                    transition
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}