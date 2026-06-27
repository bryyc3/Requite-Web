import Reward from "./components/Reward"

const rewards = [{rewardName: "Club Sandwich", cost: "900 points"}]

export default function RewardList(){
    return(
        <>
            <h1 className="text-center mt-15 font-light text-[clamp(1.5rem,3cqi,2rem)]">Click on each reward to view/customize its properties</h1>
            <div className="flex">
                {rewards.map((reward, index) => (
                    <Reward key= {index} name={reward.rewardName} points={reward.cost}/>
                ))}
            </div>
        </>
    )
}