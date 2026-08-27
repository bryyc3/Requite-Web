"use client"
import TrackingSysContainer from "./components/TrackingSysContainer"

const trackingSystems = [{name: "Point Tracking", description: "Customers earn points based on the dollar amount spent on each purchase they make", input: true, ppd: "0", available: true},
                         {name: "Visit Tracking", description: "Customers become eligible for rewards based on the amount of confirmed visits to your business", input: false, ppd: "0", available: false},
                         {name: "Referral Tracking", description: "Customers become eligble for rewards based on the amount of people theyve referred to your business", input: false, ppd: "0", available: false}] 
//pull tracking systems info from db

export default function TrackingSystem(){
    return(
        <>
            <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Activate the tracking system associated with your business</h1>
            <div className="flex items-center justify-center gap-20 p-[5cqi]">
                {trackingSystems.map((systemType, index) => (
                    <TrackingSysContainer key={index} system={systemType} onChange={(value) => (null)}/>
                ))}
            </div>
        </>
        
    )
}