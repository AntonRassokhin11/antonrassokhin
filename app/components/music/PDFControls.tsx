"use client";

type PDFControlsProps = {
  onBack: () => void;
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
};

export default function PDFControls({
  onBack,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}: PDFControlsProps) {

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <div
      className="
        flex
        items-center
        justify-between
        mb-6
      "
    >

      {/* BACK */}
      <button
        onClick={onBack}
        className="
          h-11
          px-5
          rounded-xl
          bg-[#0B1F3B]
          text-white
          font-semibold
          hover:opacity-90
          transition
        "
      >
        {"<"} Zurück
      </button>

      {/* PAGE CONTROLS */}
      <div className="flex items-center gap-4">

        <button
          onClick={prevPage}
          disabled={isFirst}
          className={`
            w-11
            h-11
            rounded-xl
            text-white
            text-xl
            font-bold
            transition
            ${
              isFirst
                ? "bg-[#4A5A73] opacity-40"
                : "bg-[#0B1F3B] hover:opacity-90"
            }
          `}
        >
          ←
        </button>

        <div className="text-sm font-medium">
          Seite {currentPage} / {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={isLast}
          className={`
            w-11
            h-11
            rounded-xl
            text-white
            text-xl
            font-bold
            transition
            ${
              isLast
                ? "bg-[#4A5A73] opacity-40"
                : "bg-[#0B1F3B] hover:opacity-90"
            }
          `}
        >
          →
        </button>

      </div>

    </div>
  );
}