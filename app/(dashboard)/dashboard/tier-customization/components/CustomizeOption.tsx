import { Tier } from "@/app/types/types";
import InfoPopup from "../../components/InfoPopup";

type CustomizeOptionProps = {
  option: {
    header: string;
    popupInfo: string;
    hasInput: boolean;
    inputSize?: string;
    inputId: string;
  };
  userInput: string | number;
  onChange?: (value: string) => void;
  activated: boolean,
  change: (field: string, value: string | number) => void
};

export default function CustomizeOption({option, userInput, onChange, activated, change}: CustomizeOptionProps){
    return(
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <h1 className={`${!activated && "text-gray-400"} font-bold text-[clamp(.1rem,2cqi,1.5rem)]`}>{option.header}</h1>
                <InfoPopup >
                  {option.popupInfo}
                </InfoPopup>
              </div>
              {option.hasInput ? (
                <input
                  type="text"
                  className={`${activated ? "bg-gray-300" : "bg-gray-100 text-gray-300"} rounded px-2 py-1`}
                  style={{ width: option.inputSize }}
                  value={`${userInput}`}
                  onChange={(e) => change(option.inputId, e.target.value)}
                  disabled={!activated}
                />) : (
                <button className={`px-3 py-1 rounded ${activated ? "text-white cursor-pointer bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400": "text-gray-500 bg-gray-300"}`}>
                  Add
                </button>
              )}
            </div>
    );
}