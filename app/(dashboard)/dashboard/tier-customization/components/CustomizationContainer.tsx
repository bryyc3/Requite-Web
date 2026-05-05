import CustomizeOption from "./CustomizeOption";

const customizeOptions = [{name: "Tier Name", hasInput: true, inputSize: "100px", info:"Make each tier of your reward program distinct with custom tier names"},
                          {name: "Points Required",  hasInput: true, inputSize: "50px", info:"Amount of points customers need to attain in order to reach this specific status"},
                          {name: "Exclusive Rewards",  hasInput: false, info:"Only allow users within this tier to redeem specific rewards"}]

export default function CustomizationContainer(){
    return(
    <div className="p-[2px] rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
        <div className="bg-white rounded-2xl p-12 flex flex-col gap-8">
           <div className="flex items-center w-full pb-10 gap-[clamp(0.5rem,10vw,50rem)]">
                <CustomizeOption option={customizeOptions[0]} />
                <CustomizeOption option={customizeOptions[1]} />
            </div>
            <CustomizeOption option={customizeOptions[2]}/>
        </div>
    </div>
    )
}