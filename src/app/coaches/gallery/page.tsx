import UploadImage from './UploadImage';
import ImageCard from './ImageCard';
import prisma from '@/lib/prisma';
import Image from 'next/image';

export default async function Gallery() {

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