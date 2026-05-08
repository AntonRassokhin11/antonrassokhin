"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Piano",
  "Toccata",
  "Symphonie Orchester",
  "Kammerorchester",
];

const pieces: Record<string, string[]> = {
  Piano: [
    "Moonlight Sonata",
    "Fantaisie Impromptu",
    "Chopin Nocturne",
  ],
  Toccata: [
    "Toccata in D Minor",
    "BWV 565",
  ],
  "Symphonie Orchester": [
    "Symphony No. 5",
    "Symphony No. 40",
  ],
  Kammerorchester: [
    "Divertimento",
    "String Quartet",
  ],
};

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [view, setView] = useState<
    "home" | "category" | "piece"
  >("home");

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [selectedPiece, setSelectedPiece] =
    useState("");

  const [page, setPage] = useState(1);

  const totalPages = 4;

  return (
    <div className="min-h-screen bg-[#F7F7F5] p-5 font-sans">

      {/* HEADER */}
      <div
        className={`
          mx-auto
          rounded-[28px]
          border border-white
          bg-[#0B1F3B]
          shadow-sm
          transition-all
          duration-500
          ${
            view === "piece"
              ? "h-[110px]"
              : "h-[150px]"
          }
        `}
      >
        <div className="h-full flex items-center justify-between px-10">

          {/* LOGO */}
          <button
            onClick={() => setView("home")}
            className="text-white text-4xl font-bold tracking-wide hover:opacity-80 transition"
          >
            AR
          </button>

          {/* SEARCH */}
          <div className="relative w-[500px]">

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

          <div className="w-[60px]" />

        </div>
      </div>

      {/* BODY */}
      <div className="flex gap-5 mt-5">

        {/* SIDEBAR */}
        <div
          onMouseEnter={() => setSidebarOpen(true)}
          onMouseLeave={() => setSidebarOpen(false)}
          className={`
            rounded-[28px]
            border
            border-white
            bg-[#0A0A0A]
            shadow-sm
            transition-all
            duration-500
            overflow-hidden
            ${
              sidebarOpen
                ? "w-[240px]"
                : "w-[90px]"
            }
          `}
          style={{
            height: "calc(100vh - 210px)",
          }}
        >

          <div className="p-6">

            {/* MENU TITLE */}
            <div className="text-white text-sm tracking-[0.3em]">
              MENÜ
            </div>

            {/* LINKS */}
            <div
              className={`
                mt-10
                space-y-6
                transition-all
                duration-300
                ${
                  sidebarOpen
                    ? "opacity-100"
                    : "opacity-0"
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

        {/* MAIN CONTENT */}
        <div className="flex-1">

          {/* HOME */}
          {view === "home" && (
            <div className="animate-fade">

              <div className="grid grid-cols-2 gap-6">

                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setView("category");
                    }}
                    className="
                      h-[170px]
                      rounded-[30px]
                      bg-white
                      border
                      border-gray-100
                      text-2xl
                      hover:scale-[1.01]
                      hover:shadow-sm
                      transition-all
                    "
                  >
                    {cat}
                  </button>
                ))}

              </div>

            </div>
          )}

          {/* CATEGORY PAGE */}
          {view === "category" && (
            <div className="bg-white rounded-[30px] p-10 animate-fade">

              <button
                onClick={() => setView("home")}
                className="mb-8 text-gray-500 hover:text-black transition"
              >
                ← Zurück
              </button>

              <h1 className="text-4xl mb-10 font-semibold">
                {selectedCategory}
              </h1>

              <div className="space-y-5">

                {(pieces[selectedCategory] || []).map(
                  (piece) => (
                    <div
                      key={piece}
                      onClick={() => {
                        setSelectedPiece(piece);
                        setView("piece");
                      }}
                      className="
                        text-xl
                        cursor-pointer
                        hover:translate-x-1
                        transition-all
                      "
                    >
                      {piece}
                    </div>
                  )
                )}

              </div>

            </div>
          )}

          {/* PIECE PAGE */}
          {view === "piece" && (
            <div className="flex gap-6 animate-fade">

              {/* PDF */}
              <div className="flex-1">

                <div className="bg-white rounded-[30px] p-8">

                  <button
                    onClick={() => setView("category")}
                    className="
                      text-gray-500
                      hover:text-black
                      transition
                      mb-6
                    "
                  >
                    ← Zurück
                  </button>

                  <h1 className="text-4xl font-bold mb-8">
                    {selectedPiece}
                  </h1>

                  {/* PDF PLACEHOLDER */}
                  <div
                    className="
                      h-[800px]
                      rounded-[20px]
                      bg-[#EFEFEF]
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    "
                  >
                    PDF VIEWER
                  </div>

                  {/* PDF NAV */}
                  <div className="flex justify-center gap-10 mt-8">

                    <button
                      disabled={page === 1}
                      onClick={() =>
                        setPage(page - 1)
                      }
                      className={`
                        transition
                        ${
                          page === 1
                            ? "opacity-30"
                            : "hover:scale-110"
                        }
                      `}
                    >
                      <ChevronLeft size={34} />
                    </button>

                    <button
                      disabled={page === totalPages}
                      onClick={() =>
                        setPage(page + 1)
                      }
                      className={`
                        transition
                        ${
                          page === totalPages
                            ? "opacity-30"
                            : "hover:scale-110"
                        }
                      `}
                    >
                      <ChevronRight size={34} />
                    </button>

                  </div>

                </div>
              </div>

              {/* INFO PANEL */}
              <div className="w-[320px]">

                <div className="bg-white rounded-[30px] p-8">

                  <div className="mb-8">
                    <div className="text-gray-400 text-sm mb-1">
                      Komponist
                    </div>

                    <div className="text-xl">
                      Ludwig van Beethoven
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-gray-400 text-sm mb-1">
                      Überarbeiter
                    </div>

                    <div className="text-xl">
                      Anton Rassokhin
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-gray-400 text-sm mb-1">
                      Thematik
                    </div>

                    <div className="text-xl">
                      Klassische Klaviermusik
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="text-gray-400 text-sm mb-2">
                      Beschreibung
                    </div>

                    <div className="leading-relaxed text-[15px]">
                      Minimalistisch überarbeitete
                      Ausgabe mit angepasster
                      Dynamik und optimierter
                      Lesbarkeit.
                    </div>
                  </div>

                  {/* DOWNLOAD */}
                  <button
                    className="
                      w-full
                      h-12
                      rounded-full
                      bg-[#0B1F3B]
                      text-white
                      hover:opacity-90
                      transition
                    "
                  >
                    PDF herunterladen
                  </button>

                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}