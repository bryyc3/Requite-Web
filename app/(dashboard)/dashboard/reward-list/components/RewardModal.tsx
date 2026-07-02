import { Reward } from "../interfaces/reward";


type RewardModalProps = {
    reward: Reward | null;
    onClose: () => void;
};

export default function RewardModal({reward, onClose}: RewardModalProps){
    if (!reward) return null;
    return(
        <div>
            hiiiiiiiiiiiiiiiiiiiii
        </div>
    )
}