import Image from "next/image";
import prisma from "@/lib/prisma";

// Modules
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import GameCard from "@/components/GameCard";

/! Follow design in Stitch but instead just go by month and show date with big bold letters. Vertical list with Date and then list of games. Display for entire month./ 

export default async function Schedule() {
    const games = await prisma.game.findMany({
        orderBy: { date: 'asc'}
    });

    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="min-h-96 px-4 py-12 mx-auto container">
                <h1 className="text-4xl font-bold text-gray-800 text-center">Schedule</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {games.length && games.length > 0 ? (
                        games.map(game => <GameCard key={game.game_id} data={game} />)
                    ) : (
                        <p className="text-center py-6 col-span-3 text-gray-600">No upcoming games. Check back later!</p>
                    )}
                </div>
            </main>
            <MainFooter />
        </div>
    );
}