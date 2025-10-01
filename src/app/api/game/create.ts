import prisma from "@/lib/prisma";

export async function createGame(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { name, date, location } = await request.json();
        const game = await prisma.game.create({
            data: {
                name,
                date: new Date(date),
                location,
            },
        });

        return new Response(JSON.stringify(game), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log(error);

        return new Response(JSON.stringify({ error: `Failed to create game ${error}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}