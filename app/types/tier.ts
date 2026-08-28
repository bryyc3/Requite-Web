import { Reward } from "./reward"

export type Tier = {
    tierName: string,
    pointsRequired: number,
    exclusiveRewards?: Reward[]
}