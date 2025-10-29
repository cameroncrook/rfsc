import prisma from "@/lib/prisma";

export async function deleteCoach(request: Request) {
    if (request.method !== 'DELETE') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const { coach_id } = await request.json();
        await prisma.coach.delete({
            where: {
                coach_id,
            },
        });

        return new Response(JSON.stringify({ message: "Coach deleted" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to delete coach ${error}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}