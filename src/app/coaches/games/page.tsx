import prisma from "@/lib/prisma";
import Game from "@/app/coaches/components/Game";
import AddGame from "./AddGame";

export default async function games() {
    const games = await prisma.game.findMany({
        orderBy: { date: 'asc' }
    });

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Games Manager</h1>

            <AddGame />
            
            <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/5">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Location</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/10">
                            {games.map(game => <Game key={game.game_id} data={game} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}