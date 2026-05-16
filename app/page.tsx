"use client";

import { useState } from "react";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MainLayout from "./components/layout/MainLayout";

import PDFControls from "./components/music/PDFControls";
import PDFViewer from "./components/music/PDFViewer";
import PieceInfoPanel from "./components/music/PieceInfoPanel";

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
    "Nocturne Op.9",
  ],

  Toccata: [
    "Toccata in D Minor",
    "BWV 565",
  ],

  "Symphonie Orchester": [
    "Symphony No.5",
    "Symphony No.40",
  ],

  Kammerorchester: [
    "Divertimento",
    "String Quartet",
  ],
};

export default function Page() {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const [selectedPiece, setSelectedPiece] =
    useState<string | null>(null);

  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = 5;

  // HOME
  const goHome = () => {
    setSelectedCategory(null);
    setSelectedPiece(null);
    setCurrentPage(1);
  };

  // BACK
  const goBack = () => {

    if (selectedPiece) {
      setSelectedPiece(null);
      setCurrentPage(1);
      return;
    }

    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  // NEXT PAGE
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // PREV PAGE
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#CFCFCA]">

      {/* HEADER */}
      <div className="fixed top-5 left-5 right-5 z-40">

        <div onClick={goHome}>
          <Header compact={selectedPiece !== null} />
        </div>

      </div>

      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* CONTENT */}
      <div className="pt-[160px]">

        <MainLayout sidebarOpen={sidebarOpen}>

          {/* LEVEL 1 */}
          {!selectedCategory && !selectedPiece && (

            <div className="p-10">

              {/* TITLE */}
              <div className="text-5xl font-bold mb-12">
                Kategorien
              </div>

              {/* CATEGORY BUTTONS */}
              <div className="flex gap-5 flex-wrap">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setSelectedCategory(item)
                    }
                    className="
                      px-8
                      h-14
                      rounded-lg
                      bg-[#0B1F3B]
                      text-white
                      font-medium
                      hover:opacity-90
                      transition
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>
          )}

          {/* LEVEL 2 */}
          {selectedCategory && !selectedPiece && (

            <div className="p-10">

              {/* BACK */}
              <button
                onClick={goBack}
                className="
                  mb-8
                  h-11
                  px-5
                  rounded-lg
                  bg-[#0B1F3B]
                  text-white
                  font-semibold
                  shadow-lg
                "
              >
                {"<"} Zurück
              </button>

              {/* TITLE */}
              <div className="text-5xl font-bold mb-12">
                {selectedCategory}
              </div>

              {/* LIST */}
              <div
                className="
                  rounded-[16px]
                  bg-[#F8F8F6]
                  border
                  border-[#E5E5E0]
                  shadow-xl
                  p-8
                "
              >

                <div className="space-y-5">

                  {(pieces[selectedCategory] || []).map(
                    (piece) => (
                      <div
                        key={piece}
                        onClick={() =>
                          setSelectedPiece(piece)
                        }
                        className="
                          text-lg
                          cursor-pointer
                          hover:translate-x-1
                          transition-all
                          duration-300
                        "
                      >
                        {piece}
                      </div>
                    )
                  )}

                </div>

              </div>

            </div>
          )}

          {/* LEVEL 3 */}
          {selectedPiece && (

            <div className="p-10">

              {/* PDF CONTROLS */}
              <PDFControls
                onBack={goBack}
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={nextPage}
                prevPage={prevPage}
              />

              {/* PART 1 */}
              <div className="flex gap-8">

                {/* PDF */}
                <PDFViewer />

                {/* INFO */}
                <PieceInfoPanel />

              </div>

            </div>
          )}

        </MainLayout>

      </div>

    </div>
  );
}