type FormQuestionProps = {
    questionTitle: String,
    questionSubtitle: String,
    inputType: String
}


export default function FormQuestion({questionTitle, questionSubtitle, inputType}: FormQuestionProps){
    return(
        <div className="text-center">
            <h1 className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent font-bold text-[40px]">Question</h1>
             <h2 className="font-extralight text-[clamp(.75rem,1.5cqi,2rem)]">question subtitle</h2>
            <input type="text" />
            <button className="cursor-pointer inline-flex items-center gap-2 px-2 py-1.5 rounded-xl 
                                    bg-gray-500 hover:bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400
                                    text-white text-sm shadow-md 
                                    transition-all duration-200 disabled:opacity-50">Next</button>
            <p className="font-extralight text-[clamp(.55rem,1.3cqi,1.5rem)]">1/3</p>
        </div>
    )
}