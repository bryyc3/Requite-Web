export async function clientRequestHelper(route: string, options: RequestInit ={}) {
    return fetch(`/library/api/${route}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    })
    
}