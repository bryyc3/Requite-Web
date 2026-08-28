import { Reward } from "../../../../types/reward";


type RewardModalProps = {
    reward: Reward | null;
    onChange?: (value: string) => void;
    onClose: () => void;
};

export default function RewardModal({reward, onClose, onChange}: RewardModalProps){
    if (!reward) return null;
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray backdrop-blur-sm">
            <form className="bg-white p-5 shadow-[0_8px_8px_rgba(0,0,0,0.55)] rounded-xl">
                <div className="flex">
                    <button onClick={onClose} className="ml-auto text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none">
                        <span className="text-2xl font-semibold">&times;</span>
                    </button>
                </div>
                
                <div className="flex pl-15 pr-15">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto w-16 h-16 text-gray-500 hover:text-blue-500 transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="text-center ml-15">
                        <div className="pb-5">
                            <h1 className="font-bold pb-2">Points Required</h1>
                            <div className="flex items-center ">
                                <input value={reward.cost} type="text" className="outline-1 outline-gray-400 rounded text-center w-[50px]" onChange={(e) => onChange?.(e.target.value)}/>
                                <p className="ml-1">points</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold pb-2">Tier Requirement</h1>
                            <button id="dropdownButton" className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span id="selectedOption">Any Tier</span>
                                <svg className="w-5 h-5 ml-2 -mr-1 text-gray-400" xmlns="http://w3.org" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pb-5">
                        <h1 className="font-bold pb-2">Item Name</h1>
                         <input value={reward.rewardName} type="text" className="outline-1 outline-gray-400 rounded w-full" onChange={(e) => onChange?.(e.target.value)}/>
                    </div>
                    <div>
                        <h1 className="font-bold pb-2">Item Description</h1>
                         <textarea value={reward.rewardName} className="outline-1 outline-gray-400 rounded w-full" onChange={(e) => onChange?.(e.target.value)}/>
                    </div>
                </div>
                <div className="pt-8 flex justify-between">
                    <button className="p-1 rounded text-red-400 outline-1 outline-red-400">Delete Item</button>
                    <button className="p-1 rounded bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">Save Changes</button>
                </div>
            </form>
        </div>
    )
}