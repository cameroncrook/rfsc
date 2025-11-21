import prisma from "@/lib/prisma";
import crypto from 'crypto';

export async function createPasswordReset(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { email } = await request.json();

        const coachRecord = await prisma.coach.findUnique({
            where: { email },
        });

        if (!coachRecord) {
            return new Response(JSON.stringify({ message: 'Password reset link has been sent' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 10); // Token valid for 10 days

        // Generate a secure random token and store only its SHA-256 hash in the DB.
        // Right now we are only storing the raw token for development purposes.
        // In the future store only hashed value and send raw token via email.
        const token = crypto.randomBytes(32).toString('hex'); // 64 hex chars
        // const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        await prisma.password_token.create({
            data: {
                coach_id: coachRecord.coach_id,
                token_hash: token,
                expires_at: expirationDate,
            }
        });

        return new Response(JSON.stringify({ message: 'Password reset link has been sent' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ message: 'An error occured. Passord reset link not sent.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}