"use client";

export default function PDFViewer() {
  return (
    <div
      className="
        flex-1
        rounded-[28px]
        bg-[#FAFAFA]
        border
        border-[#ECECEC]
        shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        p-8
        flex
        items-center
        justify-center
        min-h-[850px]
      "
    >

      <div
        className="
          w-[520px]
          h-[740px]
          bg-white
          rounded-md
          shadow-[0_4px_30px_rgba(0,0,0,0.08)]
          flex
          items-center
          justify-center
          text-gray-400
          text-sm
        "
      >
        PDF Seite
      </div>

    </div>
  );
}
