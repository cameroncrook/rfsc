import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export default async function deleteImage(req: Request) {
    if (req.method !== "DELETE") {
        return new Response(JSON.stringify({ message: "Method not allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { imageId } = await req.json();

    const image = await prisma.image.findUnique({
        where: { id: imageId },
    });

    if (!image) {
        return new Response(JSON.stringify({ message: "Image not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    // Delete file from disk
    try {
        const filePath = path.join(process.cwd(), "public", "gallery", image.filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // Delete record from database
        await prisma.image.delete({
            where: { id: imageId },
        });

        return new Response(JSON.stringify({ message: "Image deleted successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ message: "Failed to delete image" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}