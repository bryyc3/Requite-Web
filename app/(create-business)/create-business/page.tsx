import Link from "next/link";
import FormQuestion from "./components/FormQuestion";
import { useState } from "react";

const questions = [
    {
        id: "businessName",
        title: "What is the name of your business?",
        subtitle: "This will be displayed in app and how new customers discover you",
        type: "text"
    },

    {
        id: "location",
        title: "Where is your business located",
        subtitle: "Select `Nationwide` if your business is located in multiple regions",
        type: "dropdown"
    },

    {
        id: "photo",
        title: "Add your logo",
        subtitle: "Your icon for your business",
        type: "photo"
    },

]

export default function createBusiness(){
    const [question, setQuestion] = useState(0);
    
    return(
        <>
        <div className="bg-gradient-to-t from-orange-400 to-orange-600">
            <div className="min-h-screen bg-white rounded-r-[10vw] md:rounded-r-[5vw] shadow-2xl transition-all duration-300 shadow-[18px_25px_20px_rgba(0,0,0,0.55)] flex justify-center items-center">
                <div className="absolute top-8 right-8">
                    <Link  href= "/" className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent font-bold text-[50px]">Requite</Link>
                </div> 
                <FormQuestion />
            </div>
        </div>
        </>
    )
}