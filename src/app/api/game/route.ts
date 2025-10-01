import { createGame } from "./create";

export async function GET() {
    return Response.json({ 
        message: 'This is the game API endpoint.'
    })
}

export async function POST(request: Request) {
    return createGame(request);
}