"use client"
import { useEffect, useState } from "react"
import TrackingSysContainer from "./components/TrackingSysContainer"
import { clientRequestHelper } from "@/app/library/api/clientRequestHelper";
import { TrackingSystems } from "@/app/types/types";
import { useBusiness } from "../DashWrapper";

type ClientSystem ={
    name: string;
    description: string;
    input: boolean;
    available: boolean;
    id: keyof TrackingSystems;

}


const trackingSystems: ClientSystem[] = [{name: "Point Tracking", 
                                         description: "Customers earn points based on the dollar amount spent on each purchase they make", 
                                         input: true,
                                         available: true, 
                                         id:"point_tracker"},

                                        {name: "Visit Tracking", 
                                         description: "Customers become eligible for rewards based on the amount of confirmed visits to your business", 
                                         input: false,
                                         available: false, 
                                         id:"visit_tracker"},

                                        {name: "Referral Tracking", 
                                         description: "Customers become eligible for rewards based on the amount of people they've referred to your business", 
                                         input: false,
                                         available: false, 
                                         id:"referral_tracker"}] 
//pull tracking systems info from db

export default function TrackingSystem(){
    const { business, updateTrackingSystem } = useBusiness();
    const businessSystems = business.trackingSystems;

    const [ppd, setPpd] = useState(1)
    const [errorMessage, setErrorMessage] = useState<string | null>();

    async function toggleSystem(activate: boolean, trackId: string): Promise<boolean>{
        if(!activate){
            const remainingSystems ={
                pointTracker: 
                    trackId !== "point_tracker" && businessSystems.point_tracker,
                    
                visitTracker: 
                    trackId !== "visit_tracker" && businessSystems.visit_tracker,
    
                referralTracker: 
                    trackId !== "referral_tracker" && businessSystems.referral_tracker,
            }
    
            if(!Object.values(remainingSystems).some(Boolean)){
                setErrorMessage("At least one tracking system must be enabled");
            }
        }
        try{
            const res = await clientRequestHelper("business/toggle-tracking-system", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    id: trackId,
                    activated: activate
                }),
            }); 
            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            }

            updateTrackingSystem(trackId, activate);

            const successMessage = await res.json();
            
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    }


    return(
        <>
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
            <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Activate the tracking system associated with your business</h1>
            <div className="flex items-center justify-center gap-20 p-[5cqi]">
                {trackingSystems.map((systemType, index) => (
                    <TrackingSysContainer key={systemType.id} system={systemType}  pointsPerDollar={ppd} onChange={(value) => (null)} active={businessSystems?.[systemType.id] ?? false} handleToggle={toggleSystem} />
                ))}
            </div>
        </>
        
    )
}