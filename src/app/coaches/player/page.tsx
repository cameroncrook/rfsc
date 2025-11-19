export const dynamic = "force-dynamic";

import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import Player from '@/app/coaches/components/Player';

import PlayerActions from './PlayerActions';

export default async function player() {
    const session = await getServerSession();
    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || ''},
    })

    if (!coach?.player_access) {
        return <div>You do not have access to view this page.</div>;
    }

    const players = await prisma.player.findMany({
        include: {
            waiver: true,
        },
    });

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Player Manager</h1>

            <PlayerActions players={players} />
            
            <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/5">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">First Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Last Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">School</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Grade Level</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/10">
                            {players.map((player) => (
                                <Player key={player.player_id} data={player} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}