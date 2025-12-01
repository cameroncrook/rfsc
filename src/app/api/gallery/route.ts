import uploadImage from "./upload";
import deleteImage from "./delete";
import updateImage from "./update";

export async function POST(req: Request) {
    return uploadImage(req);
}

export async function DELETE(req: Request) {
    return deleteImage(req);
}

export async function PUT(req: Request) {
    return updateImage(req);
}