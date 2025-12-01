import prisma from "@/lib/prisma";

export default async function updateImage(req: Request) {
    if (req.method !== "PUT") {
        return new Response(JSON.stringify({ message: "Method not allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { imageID, newName } = await req.json();

    try {
        await prisma.image.update({
            where: { id: imageID },
            data: { name: newName },
        });

        return new Response(JSON.stringify({ message: "Image updated successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Failed to update image" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}