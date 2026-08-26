import Link from "next/link";
import ViewDropdown from "./dashboard/components/ViewDropdown";
import DashOverview from "./dashboard/components/DashOverview";
import DashNavigation from "./dashboard/components/DashNavigation";
import { redirect } from "next/navigation";
import { apiRequest } from "../library/api/api";

export default async function DashLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    // const res = await apiRequest('business/info');

    // console.log("status", res.status);

    // res.status == 401 && redirect('/authenticate');
    // res.status == 403 && redirect('/create-business');

    return(
        <div className="flex flex-col min-h-screen">
          <div className="relative flex items-center justify-between px-2 py-2">
            <div className="flex items-center">
              <Link  href= "/" className="pl-3 pr-1 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-bold text-[clamp(1rem,2cqi,1.5rem)]">
                  Requite
              </Link>
              <ViewDropdown />
            </div>
          </div>
          <DashOverview />
          <DashNavigation />    
            {children}
        </div>
    )
}