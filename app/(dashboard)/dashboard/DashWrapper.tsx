"use client"

import { createContext, useContext } from "react";
import { BusinessInformation, TrackingSystems } from "@/app/types/types";
import { useState } from "react";

type BusinessContextType = {
    business: BusinessInformation;
    updateTrackingSystem: (
        id: string,
        activated: boolean
    ) => void;
};

const BusinessContext = createContext<BusinessContextType | null>(null);

export function DashWrapper({
    business: initialBusiness,
    children,
}: {
    business: BusinessInformation;
    children: React.ReactNode;
}) {
    const [business, setBusiness] =
        useState<BusinessInformation>(initialBusiness);

    function updateTrackingSystem(id: string, activated: boolean) {
        setBusiness((current) => ({
            ...current,
            trackingSystems: {
                ...current.trackingSystems,
                [id]: activated,
            },
        }));
    }
    return(
        <BusinessContext.Provider value={{business, updateTrackingSystem}}>
            {children}
        </BusinessContext.Provider>
    );
}

export function useBusiness() {
    const business = useContext(BusinessContext);

    if (!business) {
        throw new Error("useBusiness must be used within BusinessProvider");
    }

    return business;
}