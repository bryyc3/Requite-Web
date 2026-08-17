import React from "react";

type AuthProviderButtonProps = {
    Icon: React.ComponentType<{className?: string}>;
    id:string;
    provider: string;
    handleClick: (authProvider: string) => void
};

export default function AuthServiceButton({id, Icon, provider, handleClick}: AuthProviderButtonProps){
    return(
        <button onClick={() => handleClick(id)}className="flex bg-gray-100 pl-2 items-center border border-gray-400 rounded-full w-[32vw] mb-9 cursor-pointer max-w-100">
            <Icon />
            <p className="w-full bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent text-[clamp(.3rem,1.8vw,2rem)]">Continue with {provider}</p>
        </button>
    )
}