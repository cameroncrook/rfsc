import { createGame } from "./create";
import editGame from "./edit";
import deleteGame from "./delete";

export async function GET() {
    return Response.json({ 
        message: 'This is the game API endpoint.'
    })
}

export async function POST(request: Request) {
    return createGame(request);
}

export async function PUT(req: Request) {
    return editGame(req);
}

export async function DELETE(req: Request) {
    return deleteGame(req);
}