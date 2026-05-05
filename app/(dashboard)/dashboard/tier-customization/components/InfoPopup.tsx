"use client";
import { useState, useRef, useEffect } from "react";

export default function InfoPopover({content}: {content: string}) {
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
      <span className="text-gray-500 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             className="size-5">
          <path strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
        </svg>
      </span>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-500"/>
          <div className="bg-gray-500 text-white text-sm px-3 py-2 rounded-md shadow-lg w-56 text-center">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}