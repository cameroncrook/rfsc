import prisma from "@/lib/prisma";

export default async function ViewPlayer({
    params,
}: {
    params: Promise<{ player_id: string }>
}) {
    const { player_id } = await params;
    const player = await prisma.player.findUnique({
        where: { player_id: Number(player_id) },
    });

    return (
        <div>
            <h1>{player!.first_name}</h1>
        </div>
    )
}   