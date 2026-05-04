
"use client"
import { useState } from "react";

export default function ToggleButton({ initial = false }) {
  const [enabled, setEnabled] = useState(initial);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative w-[40px] aspect-[2/1] rounded-full transition-all duration-300 ${
        enabled ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-400"
      }`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[40%] h-[80%] bg-white rounded-full transition-all duration-300 ${
          enabled ? "left-[55%]" : "left-[5%]"
        }`}
      />
    </button>
  );
}