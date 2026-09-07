import InfoPopup from "../../components/InfoPopup";

type CustomizeOptionProps = {
  option: {
    header: string;
    popupInfo: string;
    hasInput: boolean;
    inputSize?: string;
  };
  userInput: string;
  onChange?: (value: string) => void;
};

export default function CustomizeOption({option, userInput, onChange}: CustomizeOptionProps){
    return(
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <h1 className="font-bold text-[clamp(.1rem,2cqi,1.5rem)]">{option.header}</h1>
                <InfoPopup>
                  {option.popupInfo}
                </InfoPopup>
              </div>
              {option.hasInput ? (
                <input
                  type="text"
                  className="bg-gray-300 rounded px-2 py-1"
                  style={{ width: option.inputSize }}
                  value={`${userInput}`}
                  onChange={(e) => onChange?.(e.target.value)}
                />) : (
                <button className="px-3 py-1 rounded bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">
                  Add
                </button>
              )}
            </div>
    );
}