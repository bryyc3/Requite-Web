import { NextRequest, NextResponse } from "next/server";
import { apiRequest } from "../api";

async function handler(
    request: NextRequest,
    { params }: { params: Promise<{ route: string[] }> }) {
    const { route } = await params;

    const apiPath = route.join("/");

    const body =
        request.method === "GET" ? undefined : await request.text();

    const response = await apiRequest(apiPath, {
        method: request.method,
        headers: {
            "Content-Type": request.headers.get("content-type") ?? "",
        },
        body: body || undefined,
    });

    const data = await response.text();

    return new NextResponse(data, {
        status: response.status,
        headers: {
            "Content-Type":
                response.headers.get("content-type") ?? "application/json",
        },
    });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;