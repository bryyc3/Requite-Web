import ToggleButton from "../../components/ToggleButton";

type TrackingSysContainerProps = {
  system: {
    name: String,
    description: String
  }
};

export default function TrackingSysContainer({system}: TrackingSysContainerProps) {
    return(
      <div className="rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-300 p-[2px] shadow-[0_8px_8px_rgba(0,0,0,0.55)] ">
        <div className="bg-white rounded-[10px] p-7">
            <div className="flex justify-between items-center pb-10">
                <h1 className="font-bold text-[clamp(.1rem,2cqi,1.5rem)]">{system.name}</h1>
                <ToggleButton />
            </div>
            <p className="font-extralight text-[clamp(.3rem,1.5cqi,1rem)] pb-10">{system.description}</p>
        </div>
      </div>
    )
}