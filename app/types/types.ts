export type Reward={
    id?: string;
    name: string;
    description?: string;
    tier?: string;
    cost: number | "";
}

export type BusinessInformation={
    name: string,
    location: string,
    trackingSystems:TrackingSystems,
    rewardCreated: boolean
}

export type TrackingSystems={
    point_tracker: boolean;
    visit_tracker?: boolean;
    referral_tracker?: boolean;
}

export type Tier = {
    name: string,
    points: number,
    exclusiveRewards?: Reward[]
}

export type TierCustomizationInfo ={
    activated: boolean;
    tiers: Tier[]
}