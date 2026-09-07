
"use client";
import { useState, useRef, useEffect } from "react";

export default function ViewDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)} className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-extralight text-transparent text-[clamp(1rem,1cqi,1rem)]] inline-flex items-center justify-center">
        Dashboard
        <svg 
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} 
          viewBox="0 0 24 24" 
          fill="none">
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" /> {/* orange-500 */}
              <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
            </linearGradient>
          </defs>
  
          <path 
            stroke="url(#arrowGradient)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
      <div className={`absolute w-48 bg-white rounded-md shadow-lg transition-all duration-200 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <a className="block text-[clamp(.8rem,.9cqi,1.5rem)] px-4 py-1.5 hover:bg-gray-100">Preview</a>
      </div>
    </div>

  );
}