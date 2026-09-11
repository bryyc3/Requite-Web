"use client"
import { useEffect, useState } from "react";
import CustomizationContainer from "./components/CustomizationContainer";
import TiersNav from "./components/TiersNav"
import ToggleButton from "../components/ToggleButton";
import { Tier, TierCustomizationInfo } from "@/app/types/types";
import { clientRequestHelper } from "@/app/library/api/clientRequestHelper";

export default function TierCustomization({tierProgressionActivated}: {tierProgressionActivated: boolean}){
    const [index, setIndex] = useState(0);
    const [tierCustomization, setTierCustomization] = useState<TierCustomizationInfo>();
    const [warningMessage, setWarningMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string| null>();

    useEffect(()=> {
        async function getTiers() {
            try{
                const res =  await clientRequestHelper("business/tiers");
                const data: TierCustomizationInfo = await res.json();
    
                if(!res.ok){
                    setErrorMessage("there was an error getting tiers")
                }
    
                setTierCustomization(data);
            } catch (error){
                console.log("Submit form error", error);
                return false
            }
        }
        getTiers();
    }, []);

    if (!tierCustomization) {
        return <div>Loading...</div>;
    }

    async function toggleTiers(activate: boolean, identifier: string): Promise<boolean>{
        try{
            if(!activate && !warningMessage){
                setWarningMessage(true);
                return false
            }
            const res = await clientRequestHelper("business/toggle-tiers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    id: identifier,
                    activated: activate
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }

            const successMessage = await res.json();

            setTierCustomization(successMessage.tierCustomization)
            
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    }

    async function updateTier(newTierInfo: Tier){
        try{
            const res = await clientRequestHelper("business/update-tiers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }

            const successMessage = await res.json();
            
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    }

    return(
        <div className="flex-1 flex items-center justify-center gap-20 p-[5cqi]">
            {
                errorMessage &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl transition-all">
                        <h1 className="text-xl font-semibold text-gray-950">Error:</h1>
                        <p className="mt-3 text-sm leading-relaxed text-red-500">{errorMessage}</p>

                        <div className="mt-6 ">
                            <button onClick={(): void => { setErrorMessage(null); }} className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            }
            {warningMessage &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl transition-all">
                    <h1 className="text-xl font-semibold text-gray-950">
                        Are you sure you want to disable Tier Progression?
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        Disabling Tier Progression will delete all the current tiers you have created and any rewards previously associated with these tiers will no longer be associated.
                    </p>

                    <div className="mt-6 flex flex-row-reverse gap-3">
                            <button onClick={(): void => { toggleTiers(false, "tierProgression"); setWarningMessage(false) }} className="cursor-pointer rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 active:bg-red-800 transition-colors">
                            Disable
                            </button>
                            <button onClick={(): void => { setWarningMessage(false); }} className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                            Cancel
                            </button>
                    </div>
                    </div>
                </div>
            }
            <div className="w-[30vw]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Tier Progression</h1>
                    <ToggleButton onToggle={toggleTiers} initial={tierCustomization.activated} identifier="tierProgression" />
                </div>
                <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)]">Create and customize tiers for customers to progress through and earn exclusive rewards</p>
            </div>
            
                {tierCustomization.activated ? 
                    <div>
                        <CustomizationContainer tierInfo={tierCustomization.tiers[index]} saveTier={updateTier}/> 
                        <div className="flex gap-4 items-center justify-center pt-4">
                            <TiersNav tiers={tierCustomization.tiers.length} index={index} setIndex={setIndex}/>
                            <button onClick={() =>{setTierCustomization(prev =>({...tierCustomization, tiers: [...prev!.tiers, {name: "", points: 0}]}))}} className="cursor-pointer w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white flex items-center justify-center shadow-lg transition-all" >
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