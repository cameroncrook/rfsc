import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import prisma from "@/lib/prisma";

export default async function CoachesDashboard() {
    
    const session = await getServerSession();
    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || '' },
    });

    if (!coach) {
        redirect('/');
    }

    if (coach.messages_access) {
        redirect('/coaches/messages');
    } else if (coach.games_access) {
        redirect('/coaches/games');
    } else if (coach.player_access) {
        redirect('/coaches/players');
    } else if (coach.gallery_access) {
        redirect('/coaches/gallery');
    } else if (coach.coaches_access) {
        redirect('/coaches/manage');
    }
    

    return (
        <div>
            
            
        </div>
    );
}