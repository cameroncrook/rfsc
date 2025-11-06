import { Login } from "./login"

export function GET() {
    return Response.json({
        message: "Coach login endpoint."
    })
}

export async function POST(request: Request) {
    return Login(request);
}