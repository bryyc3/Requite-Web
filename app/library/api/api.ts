import { headers } from "next/headers";

export async function apiRequest(path: string, options: RequestInit = {}) {
    const requestHeaders = await headers();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        ...options,
        headers: {
            Cookie: requestHeaders.get('cookie') ?? "",
            ...options.headers,
        },
        cache: 'no-store'
    });
    console.log(response)
    return response;
    
}