import prisma from "@/lib/prisma";

export default async function deleteGame(req: Request) {
    if (req.method !== 'DELETE') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { id } = await req.json();
        await prisma.game.delete({
            where: { game_id: id },
        });

        return new Response(JSON.stringify({ message: 'Game deleted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: `Failed to delete game` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}