type RewardProps = {
    name: String;
    points: String
};


export default function Reward({name, points}:RewardProps){
    return(
        <div className="bg-white rounded-[10px] p-20 shadow-[0_8px_8px_rgba(0,0,0,0.55)] text-center">
            
            <h1>{name}</h1>
            <h2>{points}</h2>
        </div>
    )
}