
export default function BusinessNameInput({onChange}: {onChange: (value: string) => void}){
    return(
        <input type="text" 
               className = "mx-auto mt-3 mb-3 bg-gray-100 border border-gray-400 rounded px-4" 
               onChange={(e) => onChange(e.target.value)}
        />
    )
}