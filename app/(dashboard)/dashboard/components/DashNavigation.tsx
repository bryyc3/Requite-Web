
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

const tabs = [{route: "/dashboard/tier-customization", tabName: "Tier Customization"},
              {route: "/dashboard/tracking-system", tabName: "Tracking System"},
              {route: "/dashboard/reward-list", tabName: "Reward List"}];

export default function DashboardTabs() {
  const pathname = usePathname();

  const activeTab = Math.max(
    0,
    tabs.findIndex((t) => t.route === pathname)
  );

  return (
    <div className="w-full flex justify-center pt-10">
      <div className="relative w-full max-w-4xl p-2 rounded-full">
        <div
          className="absolute top-2 left-2 h-[calc(100%-16px)] w-[calc((100%-16px)/3)] bg-white rounded-full shadow-[0_4px_5px_rgba(0,0,0,0.55)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{transform: `translateX(${activeTab * 100}%)`}}/>
        <div className="grid grid-cols-3 relative z-10">
          {tabs.map((tab, index) => (
            <Link key={tab.tabName} href={tab.route} className="flex justify-center items-center py-3 px-6 text-xl font-medium">
              <span className={clsx("bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent transition-opacity duration-300")}>
                {tab.tabName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}