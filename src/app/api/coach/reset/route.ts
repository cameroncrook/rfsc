import { createPasswordReset } from "./create";

export async function POST(request: Request) {
    return createPasswordReset(request);
}