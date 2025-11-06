import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

export async function Login(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}