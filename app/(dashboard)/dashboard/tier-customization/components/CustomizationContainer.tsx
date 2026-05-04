import CustomizeOption from "./CustomizeOption";

const customizeOptions = [{name: "Tier Name", hasInput: true, inputSize: "100px"},
                          {name: "Points Required",  hasInput: true, inputSize: "50px"},
                          {name: "Exclusive Rewards",  hasInput: false}]

export default function CustomizationContainer(){
    return(
    <div className="p-[2px] rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
        <div className="bg-white rounded-2xl p-20 flex flex-col gap-8">
            <div className="flex gap-50 justify-between items-center">
                <CustomizeOption option={customizeOptions[0]}/>
                <CustomizeOption option={customizeOptions[1]}/>
            </div>
            <CustomizeOption option={customizeOptions[2]}/>
        </div>
    </div>
    )
}