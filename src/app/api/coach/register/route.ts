import { RegisterCoach } from "./create";

export function GET() {
    return Response.json({ 
        message: 'This is the coach API endpoint.'
    })
}

export async function POST(request: Request) {
    return RegisterCoach(request);
}