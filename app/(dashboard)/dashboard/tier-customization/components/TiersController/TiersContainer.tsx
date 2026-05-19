"use client"
import { useState } from "react";
import CustomizationContainer from "../CustomizationContainer";
import TiersNav from "./TiersNav"

const tiers = [1, 2, 3]; //get tiers associated with a business and map through all

export default function TiersContainer(){
    const [index, setIndex] = useState(0);

    return(
        <div className="">
            <CustomizationContainer tierInfo={tiers[index]}/>
            <TiersNav tiersCount={tiers.length} index={index} setIndex={setIndex}/>
        </div>
    )
}