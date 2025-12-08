import prisma from "@/lib/prisma";

export default async function editGame(req: Request) {
    if (req.method !== 'PUT') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { id, name, date, location } = await req.json();
        const game = await prisma.game.update({
            where: { game_id: id },
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
    } catch (err) {
        return new Response(JSON.stringify({ message: `Failed to edit game: ${err}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}