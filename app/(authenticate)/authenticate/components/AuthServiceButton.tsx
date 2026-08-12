import React from "react";

type AuthProviderButtonProps = {
    Icon: React.ComponentType<{className?: string}>;
    provider: string;
};

export default function AuthServiceButton({Icon, provider}: AuthProviderButtonProps){
    return(
        <button className="flex bg-gray-100 pl-2 items-center border border-gray-400 rounded-full w-[30vw] mb-9 cursor-pointer max-w-150">
            <Icon />
            <p className="w-full bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent text-[clamp(.7rem,2vw,1.7rem)]">Continue with {provider}</p>
        </button>
    )
}