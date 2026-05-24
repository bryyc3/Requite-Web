import ToggleButton from "../../components/ToggleButton";

type TrackingSysContainerProps = {
  system: {
    name: String,
    description: String
  }
};

export default function TrackingSysContainer({system}: TrackingSysContainerProps) {
    return(
        <div className="shadow-[0_8px_8px_rgba(0,0,0,0.55)] bg-white rounded-2xl p-10">
            <div className="flex items-center w-full pb-10 gap-[clamp(0.5rem,10vw,50rem)]">
                <h1>{system.name}</h1>
                <ToggleButton />
            </div>
            <p>{system.description}</p>
        </div>
    )
}