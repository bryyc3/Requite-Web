
"use client";
import { useEffect, useState, useRef} from "react";

export default function CarouselController({total}) {
    const [index, setIndex] = useState(0);
    const[mounted, setMounted] = useState(false);
    const prevIndex = useRef(0);

    useEffect(() => {
        setMounted(true)
        const slides = document.querySelectorAll(".homeSlide");

        slides.forEach((element, i) => {
            element.dataset.state = i === index ? "active" : "inactive";
        })

        prevIndex.current = index;

        const interval = setInterval(() => {
            setIndex((i) => (i+1) % total);
        }, 5000);
        
        return () => clearInterval(interval);

    }, [index, total]);

    return (
        <div className="flex gap-[3%] mt-[7.3cqi]">
            {Array.from({ length: total }).map((_, i) => {
                const isActive = i === index;
                return(
                    <button key = {i} onClick={() => setIndex(i)} className="group cursor-pointer flex items-center h-[12px] mt-2 relative overflow-hidden flex-shrink-0">
                        <span data-progress={isActive && mounted ? "active" : "inactive"} 
                                className="block h-[2px] w-[5cqi]
                                           bg-gradient-to-r from-orange-400 to-orange-600
                                           origin-center transition-transform duration-100 ease-out
                                           group-hover:scale-y-[2.5]
                                           data-[progress=active]:w-[20cqi]
                                           data-[progress=active]:transition-[width]
                                           data-[progress=active]:duration-[0ms]
                                           data-[progress=active]:[animation:shrink_5s_linear_forwards]" 
                                />
                    </button>
                )
            })}
        </div>
    );
}