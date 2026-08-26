type BusinessNameInputProps = {
  inputValue: string,
  inputId: string,
  onChange: (id: string, value: string) => void
};

export default function BusinessNameInput({onChange, inputValue, inputId}: BusinessNameInputProps){
    return(
        <input type="text" 
               value={inputValue}
               placeholder="Enter your business name"
               className = "text-center mt-5 mb-5 bg-gray-100 border border-gray-400 rounded px-5 py-1 w-[20vw] max-w-150 text-[clamp(.1rem,1.3vw,2rem)]" 
               onChange={(e) => onChange(inputId, e.target.value)}
        />
    )
}