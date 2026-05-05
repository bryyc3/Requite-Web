import InfoPopup from "./InfoPopup";

export default function CustomizeOption({option}: {option:any}){
    return(
            <div>
              <div className="flex items-center space-x-2 pb-2">
                <h1 className="font-bold text-[clamp(.1rem,2cqi,1.5rem)]">{option.name}</h1>
                <InfoPopup content={option.info}/>
              </div>
              {option.hasInput ? (
                <input
                  type="text"
                  className="bg-gray-300 rounded px-2 py-1"
                  style={{ width: option.inputSize }}
                />) : (
                <button className="px-3 py-1 rounded bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">
                  Add
                </button>
              )}
            </div>
    );
}