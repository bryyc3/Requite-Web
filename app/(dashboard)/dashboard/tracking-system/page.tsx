"use client"
import { useEffect, useState } from "react"
import TrackingSysContainer from "./components/TrackingSysContainer"
import { clientRequestHelper } from "@/app/library/api/clientRequestHelper";
import { TrackingSystems } from "@/app/types/types";
import { success } from "better-auth";

type ClientSystem ={
    name: string;
    description: string;
    input: boolean;
    ppd: string;
    available: boolean;
    id: keyof TrackingSystems;

}


const trackingSystems: ClientSystem[] = [{name: "Point Tracking", 
                                         description: "Customers earn points based on the dollar amount spent on each purchase they make", 
                                         input: true, 
                                         ppd: "0", 
                                         available: true, 
                                         id:"point_tracker"},

                                        {name: "Visit Tracking", 
                                         description: "Customers become eligible for rewards based on the amount of confirmed visits to your business", 
                                         input: false, ppd: "0", 
                                         available: false, 
                                         id:"visit_tracker"},

                                        {name: "Referral Tracking", 
                                         description: "Customers become eligible for rewards based on the amount of people they've referred to your business", 
                                         input: false, 
                                         ppd: "0", 
                                         available: false, 
                                         id:"referral_tracker"}] 
//pull tracking systems info from db

export default function TrackingSystem(){
    const [errorMessage, setErrorMessage] = useState("");
    const [systemStatus, setSystemStatus] = useState<TrackingSystems | null>(null);
    useEffect(() =>{
        async function getSystemStatus(){
            try{
                const res = await clientRequestHelper("business/tracking-system", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }); 
                if(!res.ok){
                    setErrorMessage("there was an error uploading your information")
                }

                const trackingSystemData: TrackingSystems = await res.json();

                setSystemStatus(trackingSystemData)
            } catch (error){
                console.log("Submit form error", error);
            }
        }
        getSystemStatus();
    }, []);

    async function toggleSystem(value: boolean, trackId: string): Promise<boolean>{
        try{
            const res = await clientRequestHelper("business/activate-tracking-system", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    id: trackId,
                    activated: value
                }),
            }); 
            if(!res.ok){
                setErrorMessage("there was an error uploading your information")
            }

            const successMessage = await res.json();
            
            return successMessage.success
        } catch (error){
            console.log("Submit form error", error);
            return false
        }
    }


    return(
        <>
            <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Activate the tracking system associated with your business</h1>
            <div className="flex items-center justify-center gap-20 p-[5cqi]">
                {trackingSystems.map((systemType, index) => (
                    <TrackingSysContainer key={systemType.id} system={systemType}  onChange={(value) => (null)} active={systemStatus?.[systemType.id] ?? false} handleToggle={toggleSystem} />
                ))}
            </div>
        </>
        
    )
}