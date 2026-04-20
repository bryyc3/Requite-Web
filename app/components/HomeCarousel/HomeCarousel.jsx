import CarouselController from "./CarouselController";
import GetStartedButton from "../GetStartedButton/GetStartedButton"

export default function HomeCarousel() {
    const slides = [{heading: "Create a Rewards Program For Your Business", subheading: "Complete control over customization"},
                    {heading: "Easy for Customers to Find and Join Your Program", subheading: "Simple as the press of a button (literally)"},
                    {heading: "Seamless Integration with How Your Business Runs", subheading: "Keep operations running smoothly"}];

    return(
        <div className="flex items-center h-[70vh] px-10">
            <section className="relative w-[40vw] ">
                {slides.map((slide, i) => (
                    <div key ={i} 
                         className="homeSlide absolute inset-0 opacity-0 translate-x-10 
                                    data-[state=active]:opacity-100 
                                    data-[state=active]:translate-x-0 
                                    data-[state=exit]:opacity-0 
                                    data-[state=exit]:translate-x-10 
                                    transition-all duration-500 ease-in-out text-gray-700" 
                          data-index ={i}>
                        <h1 className="font-bold text-[2.5cqi] leading-none">{slide.heading}</h1>
                        <h2 className="font-extralight text-[1.7cqi]">{slide.subheading}</h2>
                    </div>
                ))}
                <CarouselController total={slides.length} />
                <GetStartedButton />
            </section>
        </div>
    );
}