export async function apiRequest(path: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        credentials: 'include',
    });
      
    return response;
    
}