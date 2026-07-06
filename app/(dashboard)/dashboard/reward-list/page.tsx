"use client"
import RewardCard from "./components/RewardCard";
import { useState } from "react";
import { Reward } from "./interfaces/reward";
import RewardModal from "./components/RewardModal";

const rewards: Reward[] = [{rewardName: "Club Sandwich", cost: 900}, {rewardName: "Turkey Sandwich", cost: 600}, {rewardName: "Chicken Sandwich", cost: 900}]

export default function RewardList(){

    const [expandedReward, setExpandedReward] = useState<Reward | null>(null);

    return(
        <>
            <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Click on each reward to view/customize its properties</h1>
            <div className="flex m-auto gap-15">
                {rewards.map((reward, index) => (
                    <RewardCard key= {index} reward={reward} onClick={() => setExpandedReward(reward)}/>
                ))}
                <button className="cursor-pointer w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white flex items-center justify-center shadow-lg transition-all m-auto" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <RewardModal reward={expandedReward} onClose={() => setExpandedReward(null)}  onChange={(value) => (null)} />
        </>
    )
}