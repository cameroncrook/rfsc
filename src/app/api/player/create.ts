import prisma from '@/lib/prisma';

export async function createPlayer(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    try {
        const {} = await request.json();

        // Add player to db
        const player = await prisma.player.create({
            data: {

            },
        });

        return new Response(JSON.stringify({ message: 'Player created'}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to create player ${error}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}