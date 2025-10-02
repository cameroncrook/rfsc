

// Functions
import { createMessage } from './create';
import { deleteMessage } from './delete';

export async function GET() {
    return Response.json({ 
        message: 'This is the message API endpoint.'
    })
}

export async function POST(request: Request) { return createMessage(request); };

export async function DELETE(request: Request) { return deleteMessage(request); };