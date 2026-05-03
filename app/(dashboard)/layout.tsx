import Link from "next/link";
import ViewDropdown from "./dashboard/components/ViewDropdown";
import DashOverview from "./dashboard/components/DashOverview";
import DashNavigation from "./dashboard/components/DashNavigation";

export default function DashLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="flex flex-col min-h-screen">
          <div className="relative flex items-center justify-between px-6 py-2">
            <div className="flex items-center">
              <Link  href= "/" className="pl-3 pr-1 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-bold text-[clamp(1rem,2cqi,1.5rem)]">
                  Requite
              </Link>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-extralight text-transparent top-0 relative text-[clamp(1rem,1cqi,1rem)]]">Dashboard</span>
            </div>
              <ViewDropdown />
          </div>
          <DashOverview />
          <DashNavigation />    
            {children}
        </div>
    )
}