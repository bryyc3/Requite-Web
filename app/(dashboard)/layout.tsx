import Link from "next/link";
import ViewDropdown from "./dashboard/components/ViewDropdown"

export default function DashLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <>
          <div className="relative flex items-center justify-between px-6 py-2">
            <div className="flex items-center">
              <Link  href= "/" className="pl-3 pr-1 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-bold text-[27px]">
                  Requite
              </Link>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-extralight text-transparent top-0 relative text-[14px]">Dashboard</span>
            </div>
              <ViewDropdown />
          </div>
              
            {children}
        </>
    )
}