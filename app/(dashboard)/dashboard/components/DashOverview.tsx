"use client"
import InfoPopup from "./InfoPopup"

export default function DashOverview() {
    return(
        <div className="flex justify-between w-full pl-15 pr-15 pb-5 items-center container-type-inline-size">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-[clamp(30px,4cqi,42px)] h-[clamp(30px,4cqi,42px)] rounded-full bg-black flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,3cqi,32px)] h-[clamp(20px,3cqi,32px)]" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 7h4l2-2h6l2 2h4v12H3V7z" />
                        <circle cx="12" cy="13" r="3" />
                    </svg>
                </div>
                <div className="leading-tight">
                    <div className="relative inline-flex items-center">
                        <h1 className="font-bold text-[clamp(1rem,2cqi,1.5rem)] pr-2">Business Name</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="currentColor" className="w-[clamp(20px,3cqi,32px)] h-[clamp(20px,3cqi,32px)]">
                            <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"/>
                        </svg>
                    </div>
                    <h2 className="font-light text-[clamp(.7rem,1.5cqi,1.3rem)]">Location</h2>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-light text-[clamp(1rem,2cqi,1.5rem)]">Loyalty Member Count</h1>
                <h2 className="font-bold text-[clamp(.5rem,1.5cqi,1rem)]">44675</h2>
                <div className="relative p-[5px] rounded-full group">
                    <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 cursor-pointer relative z-[2] px-8 py-1 text-white font-semibold text-[clamp(.5rem,1.5cqi,1rem)] rounded-lg shadow-md">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="text-center">
                <div className="flex gap-3 items-center justify-center pb-2">
                    <div className="relative flex h-6 w-6 items-center justify-center translate-y-[1px]">
                        <div className="absolute h-4 w-4 rounded-full bg-red-500 opacity-75 animate-slow-ping" />
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                    </div>
                    <h1 className="font-semibold text-[clamp(1rem,2cqi,1.5rem)]">Business Status:</h1>
                    <h2 className="font-light text-[clamp(1rem,2cqi,1.5rem)]">Inactive</h2>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-gray-500 cursor-pointer relative z-[2] px-8 py-1 mr-2 text-white font-semibold text-[clamp(.5rem,1.5cqi,1rem)] rounded-full shadow-md">
                        Go active
                    </button>
                    <InfoPopup>
                        <div className="flex pb-3">
                            <span className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 mr-2 shrink-0 vertical-align-middle">
                                <span className="w-4 h-4 rounded-full bg-white" />
                            </span>
                            <p>Select a tracking system</p>
                        </div>
                        <div className="flex">
                            <span className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 mr-2 shrink-0 vertical-align-middle">
                                <span className="w-4 h-4 rounded-full bg-white" />
                            </span>
                            <p>Create a redeemable reward</p>
                        </div>
                    </InfoPopup>
                </div>
            </div>
        </div>
    )
}