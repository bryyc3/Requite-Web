"use client"

import Link from "next/link";
import FormQuestion from "./components/FormQuestion";
import { useState } from "react";
import BusinessNameInput from "./components/BusinessNameInput";
import AddPhotoInput from "./components/PhotoInput/AddPhotoInput";
import LocationSelector from "./components/LocationSelector";
import { useRouter } from "next/navigation";

type Question = {
  id: keyof FormData;
  title: string;
  subtitle: string;
  input: React.ComponentType<any>;
};

type FormData = {
  businessName: string;
  location: string;
  photo: File | null;
};

const questions: Question[] = [
    {
        id: "businessName",
        title: "What is the name of your business?",
        subtitle: "This will be how new customers discover you",
        input: BusinessNameInput
    },

    {
        id: "location",
        title: "Where is your business located?",
        subtitle: "Select \"Nationwide\" if your business is located in multiple regions",
        input: LocationSelector
    },

    {
        id: "photo",
        title: "Add your logo",
        subtitle: "Your icon for your business",
        input: AddPhotoInput
    },

]

export default function CreateBusiness(){
    const router = useRouter()
    const [question, setQuestion] = useState(0);
    const [formData, setFormData] = useState({
        businessName: "",
        location: "",
        photo: null
    });
    const [errorMessage, setErrorMessage] = useState("");

    const answerValidated = () => {
        const answer = formData[questions[question].id];

        if(!answer || answer.trim() === ""){
            setErrorMessage("Enter an Answer Before Proceeding")
            return false 
        }
        setErrorMessage("")
        return true
    }
    const nextQuestion = () => {(question < 2 && answerValidated()) && setQuestion(question+1)};
    const handleBack = () => {question > 0 && setQuestion(question-1)}
    const handleChange = (id: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,     
        }));
    }
    const submitForm = async () =>{
        if(formData.photo === null){
            setErrorMessage("Select a profile photo")
            return
        }
        try{
            const res = await fetch("/library/api/create-business", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.businessName,
                    location: formData.location,
                }),
            }); 
            if(!res.ok){
                setErrorMessage("there was an error uploading your information")
            }
        } catch (error){
            console.log("Submit form error", error);
        }
        router.push('/dashboard')
    }

    return(
        <>
            <div className="bg-gradient-to-t from-orange-400 to-orange-600">
                <div className="min-h-screen bg-white rounded-r-[10vw] md:rounded-r-[5vw] shadow-2xl transition-all duration-300 shadow-[18px_25px_20px_rgba(0,0,0,0.55)] flex justify-center items-center">
                    <div className="absolute top-8 right-8">
                        <Link  href= "/" className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent font-bold text-[clamp(1rem,5vw,3rem)]">Requite</Link>
                    </div> 
                    <FormQuestion 
                        questionTitle = {questions[question].title} 
                        questionSubtitle = {questions[question].subtitle} 
                        inputType = {questions[question].input} index ={question} 
                        next={nextQuestion} 
                        back={handleBack} 
                        change={handleChange}
                        submit={submitForm}
                        value = {formData[questions[question].id]}
                        id = {questions[question].id}
                        error= {errorMessage}
                    />
                </div>
            </div>
        </>
    )
}