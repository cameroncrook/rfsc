import UploadImage from './UploadImage';
import ImageCard from './ImageCard';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth";

export default async function Gallery() {
    const session = await getServerSession();
    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || ''},
    })

    if (!coach?.gallery_access) {
        return <div>You do not have access to view this page.</div>;
    }

    const images = await prisma.image.findMany();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Gallery Images</h1>

            <UploadImage />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map(image => <ImageCard key={image.id} image={image} />)}
            </div>
        </div>
    )
}