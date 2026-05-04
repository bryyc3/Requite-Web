export default function CustomizeOption({option}: {option:any}){
    return(
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-bold">{option.name}</h1>
                <span className="text-gray-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </span>
              </div>
              {option.hasInput ? (
                <input
                  type="text"
                  className="bg-gray-300 rounded px-2 py-1"
                  style={{ width: option.inputSize }}
                />) : (
                <button className="px-3 py-1 rounded bg-orange-500 text-white">
                  Add
                </button>
              )}
            </div>
    );
}