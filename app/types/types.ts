export type Reward={
    rewardName: string;
    cost: number;
}

export type BusinessInformation={
    businessName: string,
    businessLocation: string,
    trackingSystems:{
        pointTracker: boolean,
        visitTracker: boolean,
        referralTracker: boolean,
    },
    rewardCreated: boolean
}

export type TrackingSystems={
    point_tracker: boolean;
    visit_tracker?: boolean;
    referral_tracker?: boolean;
}