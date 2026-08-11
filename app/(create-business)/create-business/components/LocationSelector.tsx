
import { usStates } from "@/app/constants/states";
import { useState } from "react";


export default function LocationSelector({onChange}: {onChange: (value: string) => void}){
    const [selectedState, setSelectedState] = useState('');

    return(
        <div className="p-5">
            <select 
                onChange={(e) => onChange(e.target.value)}
                value={selectedState}
                className="border p-2 rounded-md bg-gray-100 text-black font-extralight text-[clamp(.75rem,1.5cqi,2rem)]"
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
   