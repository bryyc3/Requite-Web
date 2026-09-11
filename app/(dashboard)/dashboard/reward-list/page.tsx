"use client"
import RewardCard from "./components/RewardCard";
import { useEffect, useState } from "react";
import { Reward, Tier } from "../../../types/types";
import { clientRequestHelper } from "@/app/library/api/clientRequestHelper";
import RewardModal from "./components/RewardModal";
import { useBusiness } from "../DashWrapper";

type ExpandReward= | {mode: "create"; reward: Reward} | {mode: "edit"; reward: Reward};
type BusinessRewardInfo ={
    rewards: Reward[];
    tiers?: Tier[];
}

export default function RewardList(){
    const [rewardsInfo, setRewardsInfo] = useState<BusinessRewardInfo>();
    const [expandedReward, setExpandedReward] = useState<ExpandReward | null>(null);
    const { updateRewardCreated } = useBusiness();
    const [errorMessage, setErrorMessage] =  useState<string | null>();

    useEffect(()=> {
        async function getRewards() {
            try{
                const res =  await clientRequestHelper("business/rewards");
                const data: BusinessRewardInfo = await res.json();
    
                if(!res.ok){
                    setErrorMessage("there was an error getting tiers")
                    return
                }

                console.log(data);

                setRewardsInfo(data);
            } catch (error){
                console.log("Submit form error", error);
                return false
            }
        }
        getRewards();
    }, []);

    if (!rewardsInfo) {
        return <div>Loading...</div>;
    };

    function handleChange <K extends keyof Reward> (id: K, value: Reward[K]){
        setExpandedReward(prev =>{
            if(!prev) return prev;

            return{
                ...prev,
                reward:{
                    ...prev.reward,
                    [id]: value
                }
            }
         })
    }
    
    async function createReward(){
        const rewardInfo = expandedReward?.reward;

        if(!rewardInfo){
            setErrorMessage("No reward to create");
            return
        };

        if(rewardInfo.name === ""){
            setErrorMessage("Reward name cannot be empty");
            return
        };

        if(rewardInfo.cost === ""){
            setErrorMessage("Points required cannot be empty");
            return
        };
        try{
            const res = await clientRequestHelper("business/create-reward",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reward: rewardInfo
            }),}); 

            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            };

            const newReward = await res.json();
            if(rewardsInfo?.rewards){
                setRewardsInfo({...rewardInfo, rewards: [...rewardsInfo?.rewards!, newReward]})
            } else {
                setRewardsInfo({...rewardInfo, rewards:[newReward]})
            }

            updateRewardCreated(true);
            
            setExpandedReward(null);
        } catch (error){
            console.log("Submit form error", error);
        }
    }

    async function updateReward(){
        const rewardInformation = expandedReward?.reward;

        if(!rewardInformation){
            setErrorMessage("No reward to create");
            return
        };

        if(rewardInformation.name === ""){
            setErrorMessage("Reward name cannot be empty");
            return
        };

        if(rewardInformation.cost === ""){
            setErrorMessage("Points required cannot be empty");
            return
        };

        try{
            const res = await clientRequestHelper("business/update-reward",{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reward: rewardInformation
            }),}); 

            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            };

            const alteredReward = await res.json();
            setRewardsInfo({...rewardsInfo, rewards: rewardsInfo!.rewards.map(r =>
                r.id === alteredReward.id ? alteredReward: r
            )})

            setExpandedReward(null);
        } catch (error){
            console.log("Submit form error", error);
        }
    }

    async function deleteReward(){
        if(rewardsInfo?.rewards.length == 1){
            setExpandedReward(null);
            setErrorMessage("You must have at least one reward created");
            return
        };

        const rewardId = expandedReward?.reward.id;

        if(!rewardId){
            setErrorMessage("No reward to delete");
            return
        };

        try{
            const res = await clientRequestHelper("business/delete-reward",{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reward: rewardId
            }),}); 

            if(res.status !== 200){
                const resMessage = await res.json()
                setErrorMessage(resMessage.message)
                return false
            };

            setRewardsInfo({...rewardsInfo, rewards: rewardsInfo!.rewards.filter(r =>
                r.id !== rewardId
            )})

            setExpandedReward(null);
        } catch (error){
            console.log("Submit form error", error);
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
            {rewardsInfo.rewards.length > 0 ? 
                <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Click on each reward to view/customize its properties</h1>:
                <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,2cqi,1.75rem)]">Click add button and create a reward</h1>
            }

            <div className="flex m-auto gap-15">
                {rewardsInfo.rewards.map((reward, index) => (
                    <RewardCard key= {reward.id} reward={reward} onClick={() => setExpandedReward({mode: "edit", reward: reward})}/>
                ))}
                <button onClick={()=>{setExpandedReward({mode: "create", reward:{name:"", cost:0, description:""}})}} className="cursor-pointer w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white flex items-center justify-center shadow-lg transition-all m-auto" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            {
                expandedReward &&
                <RewardModal 
                    reward={expandedReward.reward} 
                    onFormClose={() => setExpandedReward(null)}  
                    onFormChange={handleChange} 
                    mode={expandedReward.mode} 
                    rewardCreation={createReward} 
                    rewardUpdate={updateReward}
                    rewardDelete={deleteReward}/>

            }
            
        </>
    )
}