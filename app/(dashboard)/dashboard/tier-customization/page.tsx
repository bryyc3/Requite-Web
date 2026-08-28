"use client"
import { useState } from "react";
import CustomizationContainer from "./components/CustomizationContainer";
import TiersNav from "./components/TiersNav"
import ToggleButton from "../components/ToggleButton";
import { Tier } from "@/app/types/tier";

export default function TierCustomization({tierProgressionActivated}: {tierProgressionActivated: boolean}){
    const [tiersArr, setTiersArr] =useState<Tier[]>([])
    const [index, setIndex] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const newTier: Tier ={
        tierName: "",
        pointsRequired: 0
    }

    const updateTier = async (newTierInfo: Tier) =>{
        try{
            const res = await fetch("/library/api/create-business", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tierInfo: newTierInfo
                }),
            }); 
            if(!res.ok){
                setErrorMessage("there was an error updating your information")
            }
        } catch (error){
            console.log("Submit form error", error);
        }
    }

    return(
        <div className="flex-1 flex items-center justify-center gap-20 p-[5cqi]">
            <div className="w-[30vw]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Tier Progression</h1>
                    <ToggleButton />
                </div>
                <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)]">Create and customize tiers for customers to progress through and earn exclusive rewards</p>
            </div>
            
                {tierProgressionActivated ? 
                    <div>
                        <CustomizationContainer tierInfo={tiersArr[index]} saveTier={updateTier}/> 
                        <div className="flex gap-4 items-center justify-center pt-4">
                        <TiersNav tiers={tiersArr.length} index={index} setIndex={setIndex}/>
                        <button onClick={() =>{setTiersArr([...tiersArr, newTier])}} className="cursor-pointer w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white flex items-center justify-center shadow-lg transition-all" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                        </div>
                    
                    </div>:
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Activate Tier Progression to Get Started</h1>
                }
                
        </div>
    )
}