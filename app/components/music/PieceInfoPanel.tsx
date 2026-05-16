"use client";

export default function PieceInfoPanel() {
  return (
    <div
      className="
        w-[360px]
        rounded-[28px]
        bg-white
        border
        border-[#ECECEC]
        shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        p-8
        flex
        flex-col
        justify-between
      "
    >

      <div>

        {/* TITLE */}
        <div className="mb-8">

          <div className="text-3xl font-bold leading-tight">
            Moonlight Sonata
          </div>

        </div>

        {/* META */}
        <div className="space-y-4 text-sm">

          <div>
            <span className="font-semibold">
              Komponist:
            </span>{" "}
            Beethoven
          </div>

          <div>
            <span className="font-semibold">
              Überarbeiter:
            </span>{" "}
            Anton Rassokhin
          </div>

          <div>
            <span className="font-semibold">
              Poet:
            </span>{" "}
            —
          </div>

          <div>
            <span className="font-semibold">
              Sprache:
            </span>{" "}
            Deutsch
          </div>

          <div>
            <span className="font-semibold">
              Erscheinungsdatum:
            </span>{" "}
            2026
          </div>

          <div>
            <span className="font-semibold">
              Stück-ID:
            </span>{" "}
            AR-0001
          </div>

          <div>
            <span className="font-semibold">
              Thematik:
            </span>{" "}
            Klassik
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 text-sm leading-7 text-gray-600">
          Minimalistische klassische
          Klavierbearbeitung mit ruhiger
          harmonischer Struktur.
        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 mt-10">

        <button
          className="
            flex-1
            h-12
            rounded-2xl
            bg-[#0B1F3B]
            text-white
            font-bold
            hover:opacity-90
            transition
          "
        >
          PDF Download
        </button>

        <button
          className="
            px-5
            h-12
            rounded-2xl
            bg-[#0B1F3B]
            text-white
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Teilen
        </button>

      </div>

    </div>
  );
}
