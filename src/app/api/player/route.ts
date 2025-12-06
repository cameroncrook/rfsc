// Functions
import { createPlayer } from './create';
import deletePlayer from './delete';

export async function GET() {
    return Response.json({ 
        message: 'This is the player API endpoint.'
    })
}

export async function POST(request: Request) { 
    return createPlayer(request); 
};

export async function DELETE(req: Request) {
    return deletePlayer(req);
}