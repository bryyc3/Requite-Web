import { headers } from "next/headers";

export async function apiRequest(path: string) {
    const requestHeaders = await headers();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        headers: {
            Cookie: requestHeaders.get('cookie') ?? "",
        },
        cache: 'no-store'
    });
      
    return response;
    
}