
import Link from "next/link";

const tabs = [{tabName: "Features", route: "/features"}, 
              {tabName: "Why Requite?", route: "/why-requite"}, 
              {tabName: "Pricing", route: "/pricing"}, 
              {tabName: "Sign In", route: "/sign-in"}];

export default function Navbar(){
    return(
      
      <div className="w-full flex px-[7vw]">
        <div className="absolute inset-8 rounded-xl p-[2px] bg-gradient-to-r from-orange-400 to-orange-600" style={{ clipPath: "inset(0 0 98% 0)", transform: "translateZ(0)"}}>
          <div className="w-full h-full bg-gray-100 rounded-lg" />
        </div>

          <div className="mr-auto py-3 bg-gray-100 z-10">
            <Link  href= "/" className="px-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-bold text-[27px] top-0 relative">Requite</Link>
          </div>
          
          <div className="relative flex items-center gap-8 py-5">
              {tabs.map((tab) => (
                <div key={tab.tabName} className="bg-gray-100 z-10">
                  <Link href= {tab.route} className="px-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold text-[14px] top-0">
                    {tab.tabName}
                  </Link>
                </div>
              ))}
          </div>
      </div>
    );
}