import Link from "next/link";
import AuthServiceButton from "./components/AuthServiceButton";
import GoogleIcon from "./components/icons/GoogleIcon";
import AppleIcon from "./components/icons/AppleIcon";

const providers = [
    {icon: GoogleIcon, name: "Google"},
    {icon: AppleIcon, name: "Apple"}
]

export default function authenticate(){
    return(
        <main className="bg-gradient-to-t from-orange-400 to-orange-600 min-h-screen w-full">
             <Link  href= "/" className="px-3 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent font-bold text-[27px] top-0 relative">Requite</Link>
             <div className="fixed flex top-0 left-0 h-full w-1/2 bg-white rounded-r-[10vw] md:rounded-r-[5vw] shadow-2xl transition-all duration-300 shadow-[18px_25px_20px_rgba(0,0,0,0.55)]">
                <div className="pl-40 pt-70">
                    <h1 className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent font-bold text-[40px] pl-20">Requite Dashboard</h1>
                    <div className="pt-15">
                        {providers.map((provider) => (
                                <AuthServiceButton key={provider.name} Icon={provider.icon} provider={provider.name} />
                        ))}
                    </div>
                    <h2 className="bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent text-[23px] text-center underline">Continue with email</h2>
                </div>
             </div>
             <div>
                <p className="text-white">Access your dashboard from <b>anywhere!</b> <br /> Dowload our mobile app</p>
             </div>
        </main>
       
    )
}