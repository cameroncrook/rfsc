

// Functions
import { createMessage } from './create';

export async function GET() {
    return Response.json({ 
        message: 'This is the message API endpoint.'
    })
}

export async function POST(request: Request) { return createMessage(request); };