export default function BusinessDashView() {
    return(
        <div className="flex justify-between w-full p-10">
            <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 7h4l2-2h6l2 2h4v12H3V7z" />
                        <circle cx="12" cy="13" r="3" />
                    </svg>
                </div>
                <div className="leading-tight">
                    <h1 className="font-bold text-[1.4cqi]">Business Name</h1>
                    <h2 className="font-light text-[1.2cqi]">Location</h2>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-light text-[1.4cqi]">Loyalty Member Count</h1>
                <h2 className="font-bold text-[1.2cqi]">44675</h2>
            </div>
            <button>Send Free Reward</button>
            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[2cqi] h-[2cqi]">
                    <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"/>
                </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[2cqi] h-[2cqi]">
                    <path d="M19.14,12.94a7.43,7.43,0,0,0,.05-.94,7.43,7.43,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.8,2H10.2a.5.5,0,0,0-.49.42L9.33,5.07a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L4.86,11.06a7.43,7.43,0,0,0-.05.94,7.43,7.43,0,0,0,.05.94L2.75,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.28,7.28,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.49.42h3.6a.5.5,0,0,0,.49-.42l.38-2.65a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>
            </div>
        </div>
    )
}