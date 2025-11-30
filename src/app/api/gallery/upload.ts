import fs from "fs";
import path from "path";
import prisma from "@/lib/prisma";

export default async function uploadImage(req: Request) {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const name = formData.get("name") as string;

    // Read file
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('Type', file.type);
    console.log('Size', file.size);
    const filename = file.name;

    // Save file to disk (for demonstration purposes, adjust as needed)
    try {
        const uploadDir = path.join(process.cwd(), "public", "gallery");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        const filePath = path.join(uploadDir, filename);
        fs.writeFileSync(filePath, buffer);

        await prisma.image.create({
            data: {
                name,
                filename,
            }
        })

        return new Response(JSON.stringify({ message: "File uploaded successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ message: "Failed to upload file" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}