import ToggleButton from "../../components/ToggleButton";

type TrackingSysContainerProps = {
  system: {
    name: string,
    description: string,
    input: boolean,
    available: boolean
    id: string
  }
  onChange?: (value: string) => void;
  handleToggle: (value: boolean, id: string) => Promise<boolean>;
  active: boolean;
  pointsPerDollar: number
};

export default function TrackingSysContainer({system, onChange, active, handleToggle, pointsPerDollar}: TrackingSysContainerProps) {
    return(
      <div className={`rounded-xl ${system.available ? "bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500" : "bg-gray-300"} p-[2px] shadow-[0_8px_8px_rgba(0,0,0,0.55)]`}>
        <div className={`${system.available ? "bg-white" : "bg-gray-50"} rounded-[10px] p-7 `}>
            <div className="flex justify-between items-center pb-10">
                <h1 className={`${!system.available && "text-gray-400"} font-bold text-[clamp(.1rem,2cqi,1.5rem)]`}>{system.name}</h1>
                {system.available &&
                  <ToggleButton onToggle={handleToggle} initial={active} identifier={system.id} />
                }
            </div>
            <p className={`${!system.available && "text-gray-400"} font-extralight text-[clamp(.3rem,1.5cqi,1rem)] pb-10`}>{system.description}</p>
            <div className="h-[40px] flex justify-center items-center">
                {!system.available && <p className="text-gray-400 font-extralight text-[clamp(.3rem,1.5cqi,1rem)] text-center">Coming soon...</p>}
                {system.input && 
                (<>
                    <p className={`${!active && "text-gray-400"}`}>$</p>
                    <input disabled={!active} value={pointsPerDollar} type="text" className={`ml-2 ${!active && "text-gray-400"} bg-gray-300 rounded px-2 w-[50px] py-1`} onChange={(e) => onChange?.(e.target.value)}/>
                    <p className={`ml-2 ${!active && "text-gray-400"}`}>= 1 point</p>
                  </>)}
            </div>
        </div>
      </div>
    )
}