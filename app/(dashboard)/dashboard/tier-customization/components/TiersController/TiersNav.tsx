type Props = {
  tiersCount: number;
  index: number;
  setIndex: (i: number) => void;
};

export default function TiersNav({tiersCount, index, setIndex}: Props){
    return(
        <div className="flex gap-2 justify-center pt-4">
            {Array.from({ length: tiersCount }).map((_, i) => {
                return(
                    <button key={i} onClick={() => setIndex(i)}
                            className={`w-4 h-4 cursor-pointer rounded-full ${index === i ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-300"}`}/>
                )
            })}
        </div>
    )
}