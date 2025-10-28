import { createCoach } from "./create";

export async function GET() {
    return Response.json({ 
        message: 'This is the coach API endpoint.'
    })
}

export async function POST(request: Request) {
    return createCoach(request);
}