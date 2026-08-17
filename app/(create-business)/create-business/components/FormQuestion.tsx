import { ComponentType, JSXElementConstructor } from "react"

type FormQuestionProps = {
    questionTitle: String,
    questionSubtitle: String,
    inputType: ComponentType<any>,
    index: number,
    value: any,
    id: string,
    next: () => void,
    back: () => void,
    change: (id: string, value: any) => void
}


export default function FormQuestion({questionTitle, questionSubtitle, inputType, index, next, back, change, value, id}: FormQuestionProps){
    const Input = inputType;
    return(
        <div className="relative">
            <div className="flex flex-col justify-center items-center">
                {index > 0 &&(
                    <button onClick={back} className="cursor-pointer absolute left-[-90] top-1/2 -translate-y-1/4">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#FFB347" />
                                    <stop offset="100%" stopColor="#FF6B00" />
                                </linearGradient>
                            </defs>

                            <path d="M15 5L8 12L15 19" stroke="url(#orangeGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                  </button>
                )}
                <h1 className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent font-bold text-[clamp(1rem,4vw,4rem)]">{questionTitle}</h1>
                <h2 className="font-extralight text-[clamp(1rem,2vw,2rem)]">{questionSubtitle}</h2>
                <Input onChange = {change} inputValue = {value} inputId = {id} />
                {index === 2 ?
                    <button onClick={next} className="text-[clamp(.1rem,1.3vw,2rem)] cursor-pointer pl-5 pr-5 pt-2 pb-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400
                    text-white text-sm shadow-md transition-all cursor-pointer mb-4">Finish</button> :
                    <button onClick={next} className="text-[clamp(.1rem,1.3vw,2rem)] cursor-pointer pl-5 pr-5 pt-2 pb-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400
                    text-white text-sm shadow-md transition-all cursor-pointer mb-4">Next</button>
            
                }
                
                <p className="font-extralight text-[clamp(.55rem,1.3cqi,1.5rem)]">{`${index + 1} / 3`}</p>
            </div>
        </div>
        
    )
}