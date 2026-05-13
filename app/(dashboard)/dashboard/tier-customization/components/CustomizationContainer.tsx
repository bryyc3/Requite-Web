import CustomizeOption from "./CustomizeOption";

const customizeOptions = [{name: "Tier Name", hasInput: true, inputSize: "100px", info:"Make each tier of your reward program distinct with custom tier names"},
                          {name: "Points Required",  hasInput: true, inputSize: "50px", info:"Amount of points customers need to attain in order to reach this specific status"},
                          {name: "Exclusive Rewards",  hasInput: false, info:"Only allow users within this tier to redeem specific rewards"}]

export default function CustomizationContainer({tierInfo} : {tierInfo:any}){
    return(
        <div className="bg-white rounded-2xl pt-5 pl-12 pr-12 pb-12 flex flex-col gap-8">
            <div className="ml-auto flex items-center">
                <button className="cursor-pointer inline-flex items-center gap-2 px-2 py-1.5 rounded-xl 
                                bg-gray-500 hover:bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400
                                text-white text-sm shadow-md 
                                transition-all duration-200 disabled:opacity-50">
                    Save Changes
                </button>
                <button className="p-2 rounded-lg text-black hover:text-red-600 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                    </svg>
                </button>
            </div>
            <div className="flex items-center w-full pb-10 gap-[clamp(0.5rem,10vw,50rem)]">
                <CustomizeOption option={customizeOptions[0]} info={tierInfo} />
                <CustomizeOption option={customizeOptions[1]} info={tierInfo}/>
            </div>
            <CustomizeOption option={customizeOptions[2]} info={tierInfo}/>
        </div>
    )
}