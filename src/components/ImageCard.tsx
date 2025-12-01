import React from 'react';
import type { image as imageType } from '@prisma/client';
import Image from 'next/image';

export default function ImageCard({ image }: { image: imageType }) {
    return (
        <div className='relative overflow-hidden rounded-xl group break-inside-avoid flex items-center'>
            <Image
                src={`/gallery/${image.filename}`}
                alt={image.name}
                width={400}
                height={400}
                className='w-full h-auto object-cover rounded-xl'
            />
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                <p className='text-white text-base font-bold leading-tight line-clamp-2'>{image.name}</p>
            </div>
        </div>
    )
}