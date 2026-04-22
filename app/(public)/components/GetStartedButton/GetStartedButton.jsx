import Link from "next/link"

export default function GetStartedButton(){
    return(
        <div className="mt-[1cqi] ">
            <div className="relative inline-flex p-[2px] rounded-full group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300" />
                <div className="absolute inset-[2px] rounded-full bg-gray-100" />
                <Link href="/dashboard" className="cursor-pointer relative z-[2] px-8 py-1 text-black font-semibold rounded-full transition-all duration-300 group-hover:shadow-[1px_1px_8px_#f69400] text-[1.4cqi]">
                    Get Started
                </Link>
            </div>
        </div>
    )
}