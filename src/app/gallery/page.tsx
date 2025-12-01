import prisma from "@/lib/prisma";
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import ImageCard from "@/components/ImageCard";

export default async function gallery() {
    const images = await prisma.image.findMany({
        orderBy: {
            uploaded_at: 'desc',
        },
    });

    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </main>
            <MainFooter />
        </div>
    )
}