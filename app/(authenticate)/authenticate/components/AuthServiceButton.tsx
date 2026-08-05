import React from "react";

type AuthProviderButtonProps = {
    Icon: React.ComponentType<{className?: string}>;
    provider: string;
};

export default function AuthServiceButton({Icon, provider}: AuthProviderButtonProps){
    return(
        <div className="flex bg-gray-200 p-1 items-center border border-gray-400 rounded-full mb-9">
            <Icon />
            <p className="w-full ml-8 bg-gradient-to-b from-orange-600 to-orange-400 bg-clip-text text-transparent text-[25px]">Continue with {provider}</p>
        </div>
    )
}