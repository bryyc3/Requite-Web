import ToggleButton from "../components/ToggleButton";
import CustomizationContainer from "./components/CustomizationContainer";

export default function TierCustomization(){
    return(
        <div className="flex-1 flex items-center justify-between p-[5cqi]">
            <div className="w-[30vw]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[clamp(1rem,2cqi,1.5rem)]">Tier Progression</h1>
                    <ToggleButton />
                </div>
                <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)]">Create and customize tiers for customers to progress through and earn exclusive rewards</p>
            </div>
            <CustomizationContainer />
        </div>
    )
}