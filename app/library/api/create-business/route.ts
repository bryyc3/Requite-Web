import { apiRequest } from "@/app/library/api/api";

export async function POST(req: Request) {
    try{
        const body = await req.json();

        const response = await apiRequest("business/create-business", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        
        return Response.json(data, {
            status: response.status,
        });
    } catch(error){
        console.log("POST fetch error", error)
    }
}