
type TiersNavProps = {
  tiers: number;
  index: number;
  setIndex: (i: number) => void;
};

export default function TiersNav({tiers, index, setIndex}: TiersNavProps){
    return(
        <>
            {Array.from({length: tiers}).map((_, i) => {
                return(
                    <button key={i} onClick={() => setIndex(i)}
                            className={`w-4 h-4 cursor-pointer rounded-full ${index === i ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-300"}`}/>
                )})
            }
        </>
    )
}