import { createCoach } from "./create";
import { deleteCoach } from "./delete";
import { updateCoachPermissions } from "./updatePermissions";

export async function GET() {
    return Response.json({ 
        message: 'This is the coach API endpoint.'
    })
}

export async function POST(request: Request) {
    return createCoach(request);
}

export async function PUT(request: Request) {
    return updateCoachPermissions(request);
}

export async function DELETE(request: Request) {
    return deleteCoach(request);
}