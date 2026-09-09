
"use client"
import { set } from "better-auth";
import { useState } from "react";

type ToggleButtonProps ={
  onToggle: (value: boolean, id: string) => Promise<boolean>;
  initial: boolean;
  identifier: string
}

export default function ToggleButton({ onToggle, initial, identifier }: ToggleButtonProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [enabled, setEnabled] = useState(initial);

  async function handleToggle(){
    if(isUpdating) return;

    setEnabled(!enabled);

    try{
        const success = await onToggle(!enabled, identifier);

        if(success){
          console.log("successful toggle")
          setEnabled(!enabled)
          setIsUpdating(false);
        } else{
          setEnabled(enabled);
          setIsUpdating(false);
        }
    } catch(error){
      setEnabled(enabled);
    }
  }

  return (
    <button
      onClick={() => handleToggle()}
      className={`cursor-pointer relative w-[40px] aspect-[2/1] rounded-full transition-all duration-300 ${
        enabled ? "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" : "bg-gray-400"
      }`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[40%] h-[80%] bg-white rounded-full transition-all duration-300 ${
          enabled ? "left-[55%]" : "left-[5%]"
        }`}
      />
    </button>
  );
}