"use client"
import { useState } from "react";
import CustomizationContainer from "./components/CustomizationContainer";
import TiersNav from "./components/TiersNav"
import ToggleButton from "../components/ToggleButton";

const tiersArr = [{tierName: "1"}, {tierName: "1"}, {tierName: "1"}]//get tiers associated with a business and map through all

export default function TierCustomization(){
    const [index, setIndex] = useState(0);

    return(
        <div className="flex-1 flex items-center justify-center gap-20 p-[5cqi]">
            <div className="w-[30vw]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Tier Progression</h1>
                    <ToggleButton />
                </div>
                <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)]">Create and customize tiers for customers to progress through and earn exclusive rewards</p>
            </div>
            <div>
                <CustomizationContainer tierInfo={tiersArr[index]}/>
                <TiersNav tiers={tiersArr} index={index} setIndex={setIndex}/>
            </div>
        </div>
    )
}