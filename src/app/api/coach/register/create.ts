import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

export async function RegisterCoach(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { token, first_name, last_name, password } = await request.json();

        const coachToken = await prisma.passwordToken.findFirst({
            where: {
                tokenHash: token,
                expiresAt: { gt: new Date() },
            },
        });

        if (!coachToken) {
            return new Response(JSON.stringify({ message: 'Invalid or expired token' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await prisma.coach.update({
            where: { coach_id: coachToken.coach_id },
            data: {
                first_name,
                last_name,
                password: hashedPassword,
            },
        });

        await prisma.passwordToken.delete({
            where: { id: coachToken.id}
        })

        return new Response(JSON.stringify({ message: 'Coach registered' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('RegisterCoach error', err);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
 