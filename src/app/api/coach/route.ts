import { createCoach } from "./create";

export async function GET() {
    return Response.json({ 
        message: 'This is the game API endpoint.'
    })
}

export async function Post(request: Request) {
    return createCoach(request);
}