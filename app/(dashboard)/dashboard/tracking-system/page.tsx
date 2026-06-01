"use client"
import TrackingSysContainer from "./components/TrackingSysContainer"

const trackingSystems = [{name: "Point Tracking", description: "Customers earn points based on the dollar amount spent on each purchase they make", input: true, ppd: "0"},
                         {name: "Visit Tracking", description: "Customers become eligible for rewards based on the amount of confirmed visits to your business", input: false, ppd: "0"},
                         {name: "Referral Tracking", description: "Customers become eligble for rewards based on the amount of people theyve referred to your business", input: false, ppd: "0"}] 
//pull tracking systems info from db

export default function TrackingSystem(){
    return(
        <div className="flex-1 flex items-center justify-center gap-20 p-[5cqi]">
            {trackingSystems.map((systemType, index) => (
                <TrackingSysContainer key={index} system={systemType} onChange={(value) => (null)}/>
            ))}
        </div>
    )
}