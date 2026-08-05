export interface Tier{
    tierName: String,
}

type TiersNavProps = {
  tiers: Tier[]
  index: number;
  setIndex: (i: number) => void;
};

export default function TiersNav({tiers, index, setIndex}: TiersNavProps){
    return(
        <div className="flex gap-4 items-center justify-center pt-4">
            {tiers.map((tier, i) => {
                return(
                    <button key={i} onClick={() => setIndex(i)}
                            className={`w-4 h-4 cursor-pointer rounded-full ${index === i ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-300"}`}/>
                );})
            };
            <button className="cursor-pointer w-6 h-6 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white flex items-center justify-center shadow-lg transition-all" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}