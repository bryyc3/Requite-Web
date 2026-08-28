import { useState, useRef, useEffect } from "react";

export default function InfoPopup({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
        if(
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
        ){setOpen(false)};
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside)}, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button className="bg-white hover:bg-gray-50 text-gray-800  transition-all rounded-full duration-200 cursor-pointer shadow-md border border-gray-100 flex items-center justify-center"
              onClick={() => setOpen((prev) => !prev)}>
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-5">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f88634" />
              <stop offset="100%" stopColor="#f1a532" />
            </linearGradient>
          </defs>
          <path 
            stroke="url(#orangeGradient)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"/>
          <div className="bg-white text-black text-sm px-3 py-2 mr-54 rounded-md shadow-[0_8px_8px_rgba(0,0,0,0.55)] w-60 text-center">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}