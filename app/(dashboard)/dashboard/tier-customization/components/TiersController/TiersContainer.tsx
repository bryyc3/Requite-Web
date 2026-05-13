"use client"
import { useState } from "react";
import CustomizationContainer from "../CustomizationContainer";
import TiersNav from "./TiersNav"

export default function TiersContainer({tiers} : {tiers: any}){
    const [index, setIndex] = useState(0);

    return(
        <div className="">
            <CustomizationContainer tierInfo={tiers[index]}/>
            <TiersNav tiersCount={tiers.length} index={index} setIndex={setIndex}/>
        </div>
    )
}