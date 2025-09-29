// Functions
import { createPlayer } from './create';

export async function GET() {
    return Response.json({ 
        message: 'This is the player API endpoint.'
    })
}

export async function POST(request: Request) { 
    return createPlayer(request); 
};