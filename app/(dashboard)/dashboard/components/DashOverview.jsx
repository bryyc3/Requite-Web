export default function DashOverview() {
    return(
        <div className="flex justify-between w-full p-10 items-center container-type-inline-size">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-[clamp(30px,4cqi,42px)] h-[clamp(30px,4cqi,42px)] rounded-full bg-black flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[clamp(20px,3cqi,32px)] h-[clamp(20px,3cqi,32px)]" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 7h4l2-2h6l2 2h4v12H3V7z" />
                        <circle cx="12" cy="13" r="3" />
                    </svg>
                </div>
                <div className="leading-tight">
                    <h1 className="font-bold text-[clamp(1rem,2cqi,1.5rem)]">Business Name</h1>
                    <h2 className="font-light text-[clamp(.5rem,1.5cqi,1rem)]">Location</h2>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-light text-[clamp(1rem,2cqi,1.5rem)]">Loyalty Member Count</h1>
                <h2 className="font-bold text-[clamp(.5rem,1.5cqi,1rem)]">44675</h2>
            </div>
            <div className="mt-[1cqi]">
            <div className="relative inline-flex p-[5px] rounded-full group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" />
                    <button href="/dashboard" className="cursor-pointer relative z-[2] px-8 py-1 text-black font-semibold rounded-full text-[clamp(.5rem,1.5cqi,1rem)]">
                        Send Free Reward
                    </button>
                </div>
            </div>
            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[clamp(20px,3cqi,32px)] h-[clamp(20px,3cqi,32px)]">
                    <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"/>
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[clamp(20px,3cqi,32px)] h-[clamp(20px,3cqi,32px)]">
                    <path d="M19.14,12.94a7.43,7.43,0,0,0,.05-.94,7.43,7.43,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.8,2H10.2a.5.5,0,0,0-.49.42L9.33,5.07a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L4.86,11.06a7.43,7.43,0,0,0-.05.94,7.43,7.43,0,0,0,.05.94L2.75,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.28,7.28,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.49.42h3.6a.5.5,0,0,0,.49-.42l.38-2.65a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>
            </div>
        </div>
    )
}