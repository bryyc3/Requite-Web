import Link from "next/link";
import AuthServiceButton from "./components/AuthServiceButton";
import GoogleIcon from "./components/icons/GoogleIcon";
import AppleIcon from "./components/icons/AppleIcon";

const providers = [
    {id: "google", icon: GoogleIcon, name: "Google"},
    {id: "apple", icon: AppleIcon, name: "Apple"}
]

export default function authenticate(){
    return(
        <div className="min-h-screen grid grid-cols-2 bg-gradient-to-t from-orange-400 to-orange-600">
            <div className="bg-white rounded-r-[10vw] md:rounded-r-[5vw] shadow-2xl transition-all duration-300 shadow-[18px_25px_20px_rgba(0,0,0,0.55)]">
                <div className="pl-40 pt-70">
                    <h1 className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent font-bold text-[clamp(1rem,1.5vw+1rem,3rem)] pl-20">Requite Dashboard</h1>
                    <div className="pt-15">
                        {providers.map((provider) => (
                                <AuthServiceButton key={provider.id} Icon={provider.icon} provider={provider.name} />
                        ))}
                    </div>
                    <h2 className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent text-[clamp(1rem,.7vw+1rem,2rem)] w-100 text-center underline">Continue with email</h2>
                </div>
            </div>
            <div className="flex-1 relative">
                <div className="absolute top-8 right-8">
                    <Link  href= "/" className="bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent font-bold text-[clamp(1rem,2vw+1rem,3rem)]">Requite</Link>
                </div>
                <div className="h-full flex justify-center">
                        <div className="text-center pt-50 w-full">
                            <p className="text-white text-[25px]">Access your dashboard from <b>anywhere!</b> <br /> Dowload our mobile app</p>
                        </div>
                </div>
            </div>
        </div>
       
    )
}