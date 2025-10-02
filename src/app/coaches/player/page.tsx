import prisma from '@/lib/prisma';
import Player from '@/app/coaches/components/Player';

export default async function player() {
    const players = await prisma.player.findMany({
        include: {
            waiver: true,
        },
    });

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Player Manager</h1>

            <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
                <button className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">filter_alt</span>
                    <span className="hidden lg:inline">Filter</span>
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">sheets_rtl</span>
                    <span className="hidden lg:inline">Export to Sheet</span>
                </button>
            </div>
            
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