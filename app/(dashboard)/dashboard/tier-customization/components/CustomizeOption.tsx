import InfoPopup from "./InfoPopup";

type CustomizeOptionProps = {
  option: {
    name: string;
    popupInfo: string;
    hasInput: boolean;
    inputSize?: string;
  };
  info: string;
  onChange?: (value: string) => void;
};

export default function CustomizeOption({option, info, onChange,}: CustomizeOptionProps){
    return(
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <h1 className="font-bold text-[clamp(.1rem,2cqi,1.5rem)]">{option.name}</h1>
                <InfoPopup content={option.popupInfo}/>
              </div>
              {option.hasInput ? (
                <input
                  type="text"
                  className="bg-gray-300 rounded px-2 py-1"
                  style={{ width: option.inputSize }}
                  value={`${info}`}
                  onChange={(e) => onChange?.(e.target.value)}
                />) : (
                <button className="px-3 py-1 rounded bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">
                  Add
                </button>
              )}
            </div>
    );
}