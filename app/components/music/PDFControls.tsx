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
          h-9
          px-4
          rounded-lg
          bg-[#0B1F3B]
          text-white
          text-sm
          font-semibold
          shadow-lg
          hover:opacity-90
          transition
        "
      >
        Zurück
      </button>

      {/* PAGE CONTROLS */}
      <div className="flex items-center gap-4">

        {/* PREV */}
        <button
          onClick={prevPage}
          disabled={isFirst}
          className={`
            w-9
            h-9
            rounded-lg
            text-white
            text-base
            font-bold
            flex
            items-center
            justify-center
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

        {/* PAGE */}
        <div className="text-sm font-medium">
          Seite {currentPage} / {totalPages}
        </div>

        {/* NEXT */}
        <button
          onClick={nextPage}
          disabled={isLast}
          className={`
            w-9
            h-9
            rounded-lg
            text-white
            text-base
            font-bold
            flex
            items-center
            justify-center
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