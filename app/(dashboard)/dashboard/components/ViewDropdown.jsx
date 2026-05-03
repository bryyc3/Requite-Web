
"use client";
import { useState, useRef, useEffect } from "react";

export default function ViewDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 md:block">
      <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center text-[clamp(1rem,1cqi,1rem)] px-4 py-1 bg-gray-300 text-black rounded-md font-extralight">
        Dashboard
        <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}>
        <a className="block text-[clamp(1rem,1cqi,1.5rem)] px-4 py-2 hover:bg-gray-100">Preview</a>
      </div>
    </div>
  );
}