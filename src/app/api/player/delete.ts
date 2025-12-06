import prisma from '@/lib/prisma';

export default async function deletePlayer(req: Request) {
    if (req.method !== 'DELETE') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { player_id } = await req.json();

        await prisma.player.delete({
            where: {player_id}
        })

        return new Response(JSON.stringify({ message: 'Player deleted.'}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Failed to delete player.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}