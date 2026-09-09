export type Reward={
    rewardName: string;
    cost: number;
}

export type BusinessInformation={
    businessName: string,
    businessLocation: string,
    trackingSystems:TrackingSystems,
    rewardCreated: boolean
}

export type TrackingSystems={
    point_tracker: boolean;
    visit_tracker?: boolean;
    referral_tracker?: boolean;
}

export type Tier = {
    tierName: string,
    pointsRequired: number,
    exclusiveRewards?: Reward[]
}

export type TierCustomizationInfo ={
    activated: boolean;
    tiers: Tier[]
}