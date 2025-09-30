import prisma from '@/lib/prisma';

function toBoolean(value: string): boolean {
  return value === 'yes' || value === 'on';
}

export async function createPlayer(request: Request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    try {
        const {first_name, last_name, date_of_birth, address, school, grade_level, teacher, shirt_size, p1_first_name, p1_last_name, p1_email, p1_phone, p2_first_name, p2_last_name, p2_email, p2_phone, emergency_name, emergency_phone, emergency_relation, medical_conditions, emergency_care_consent, liability_waiver, photo_permission, volunteer_interest, walk_home_permission, travel_permission, general_waiver_signed, signature} = await request.json();
        const date_of_birth_datetime = new Date(date_of_birth).toISOString();

        // Add player to db
        const player = await prisma.player.create({
            data: {
                first_name, 
                last_name, 
                date_of_birth: date_of_birth_datetime, 
                address, 
                school, 
                grade_level, 
                teacher, 
                shirt_size,
            },
        });

        // Add waiver to db
        const waiver = await prisma.waiver.create({
            data: {
                player_id: player.player_id,
                p1_first_name, 
                p1_last_name, 
                p1_email, 
                p1_phone, 
                p2_first_name, 
                p2_last_name, 
                p2_email, 
                p2_phone, 
                emergency_name, 
                emergency_phone, 
                emergency_relation, 
                medical_conditions, 
                emergency_care_consent: toBoolean(emergency_care_consent), 
                liability_waiver: toBoolean(liability_waiver), 
                photo_permission: toBoolean(photo_permission), 
                volunteer_interest: toBoolean(volunteer_interest), 
                walk_home_permission: toBoolean(walk_home_permission), 
                travel_permission: toBoolean(travel_permission), 
                general_waiver_signed: toBoolean(general_waiver_signed), 
                signature
            }
        })

        return new Response(JSON.stringify({ message: 'Player created'}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log('Error creating player:', error);
        return new Response(JSON.stringify({ error: `Failed to create player ${error}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}