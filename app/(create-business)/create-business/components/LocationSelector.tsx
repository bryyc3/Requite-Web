
import { usStates } from "@/app/constants/states";

type LocationSelectorProps = {
  inputValue: string,
  inputId: string,
  onChange: (id: string, value: string) => void
};

export default function LocationSelector({onChange, inputValue, inputId}: LocationSelectorProps){
    return(
        <div className="p-5">
            <select 
                onChange={(e) => onChange(inputId, e.target.value)}
                value={inputValue}
                className="border p-2 rounded-md bg-gray-100 text-black font-extralight text-[clamp(.1rem,1.3vw,2rem)]"
            >
                <option value="">Select a location</option>
                <option value="nationwide">Nationwide</option>
                {
                    usStates.map((state) => (
                        <option key={state.code} value={state.code}>
                            {state.name}
                        </option>
                    ))
                }
            </select>
        </div>
        
    )
}
   