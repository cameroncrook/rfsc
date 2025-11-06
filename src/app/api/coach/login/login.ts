import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

export async function Login(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { email, password } = await request.json();

        const coach = await prisma.coach.findUnique({
            where: { email },
        })

        if (!coach || !coach.password) {
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const isPasswordValid = await bcrypt.compare(password, coach.password);
        
        if (isPasswordValid) {
            return new Response(JSON.stringify({message: 'Login successfull', id: coach.coach_id}), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}