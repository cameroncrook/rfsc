import Link from "next/link";
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import LogoutBtn from "./components/logoutBtn";
import prisma from "@/lib/prisma";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession();

    if (!session) {
        redirect('/coach/login');
    }

    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || '' },
    });

    return (
        <div className="min-h-screen flex">
            <aside className="w-64 border-r border-gray-200">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-gray-900">Coaches</h1>
                </div>
                <nav className="flex-1 px-4 py-2 space-y-1">
                    {coach?.messages_access && (
                        <Link href="/coaches/messages" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary/10">
                            <span className="material-symbols-outlined">mail</span>
                            <span className="text-sm font-medium">Site Messages</span>
                        </Link>
                    )}
                    {coach?.games_access && (
                        <Link href="/coaches/games" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary/10">
                            <span className="material-symbols-outlined">calendar_month</span>
                            <span className="text-sm font-medium">Games Manager</span>
                        </Link>
                    )}
                    {coach?.player_access && (
                        <Link href="/coaches/player" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary/10">
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-sm font-medium">Player Manager</span>
                        </Link>
                    )}
                    {coach?.gallery_access && (
                    <Link href="/coaches/gallery" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary/10">
                        <span className="material-symbols-outlined">image</span>
                        <span className="text-sm font-medium">Gallery</span>
                    </Link>
                    )}
                    {coach?.coaches_access && (
                        <Link href="/coaches/coaches" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary/10">
                            <span className="material-symbols-outlined">manage_accounts</span>
                            <span className="text-sm font-medium">Coaches Manager</span>
                        </Link>
                    )}
                    
                </nav>
                <div className="p-4 mt-auto border-t border-gray-200">
                    <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-primary/10" href="/">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                    </svg>
                    <span className="text-sm font-medium">View Site</span>
                    </Link>
                    <LogoutBtn />
                    <p className="text-xs p-2">Logged in as: {session?.user?.name}</p>
                </div>
            </aside>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
