import prisma from "@/lib/prisma";

export async function createCoach(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { email } = await request.json();
        await prisma.coach.create({
            data: {
                email,
            },
        });

        return new Response(JSON.stringify({ message: 'Coach created Successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log(error);

        return new Response(JSON.stringify({ error: `Failed to create coach ${error}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}