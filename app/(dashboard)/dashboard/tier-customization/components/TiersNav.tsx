
type TiersNavProps = {
  tiers: number;
  index: number;
  setIndex: (i: number) => void;
  activated: boolean;
  changeInitialTier: (i: number) => void;
};

export default function TiersNav({tiers, index, setIndex, activated, changeInitialTier}: TiersNavProps){
    function handleClick(selectedIndex: number){
        setIndex(selectedIndex);    
        changeInitialTier(selectedIndex);
    };
    
    return(
        <>
            {Array.from({length: tiers}).map((_, i) => {
                return(
                    <button key={i} onClick={() => handleClick(i)}
                            className={`w-4 h-4 ${activated && "cursor-pointer"} rounded-full ${(index === i && activated) ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-300"}`}/>
                )})
            }
        </>
    )
}