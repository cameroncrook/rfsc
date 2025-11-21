import prisma from "@/lib/prisma";
import crypto from 'crypto';
import { convertCheckboxToBoolean } from "@/lib/utils";

export async function createCoach(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { email, messages_access, games_access, player_access, coaches_access } = await request.json();
        const coach = await prisma.coach.create({
            data: {
                email,
                messages_access: convertCheckboxToBoolean(messages_access), 
                games_access: convertCheckboxToBoolean(games_access), 
                player_access: convertCheckboxToBoolean(player_access), 
                coaches_access: convertCheckboxToBoolean(coaches_access)
            },
        });

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); // Token valid for 30 days

        // Generate a secure random token and store only its SHA-256 hash in the DB.
        // Right now we are only storing the raw token for development purposes.
        // In the future store only hashed value and send raw token via email.
        const token = crypto.randomBytes(32).toString('hex'); // 64 hex chars
        // const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        await prisma.password_token.create({
            data: {
                coach_id: coach.coach_id,
                token_hash: token,
                expires_at: expirationDate,
            }
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