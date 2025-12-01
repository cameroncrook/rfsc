import prisma from "@/lib/prisma";
import { convertCheckboxToBoolean } from "@/lib/utils";

export async function updateCoachPermissions(request: Request) {
    if (request.method !== 'PUT') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { coach_id, messages_access, games_access, player_access, gallery_access, coaches_access } = await request.json();
        await prisma.coach.update({
            where: { coach_id },
            data: {
                messages_access:convertCheckboxToBoolean(messages_access),
                games_access:convertCheckboxToBoolean(games_access),
                player_access:convertCheckboxToBoolean(player_access),
                gallery_access:convertCheckboxToBoolean(gallery_access),
                coaches_access:convertCheckboxToBoolean(coaches_access)
            },
        });

        return new Response(JSON.stringify({ message: 'Coach permissions updated successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Failed to update coach permissions' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}