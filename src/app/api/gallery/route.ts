import uploadImage from "./upload";

export async function POST(req: Request) {
    return uploadImage(req);
}