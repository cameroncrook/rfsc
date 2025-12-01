"use client";

import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { image as imageType } from '@prisma/client';
import Image from 'next/image';

export default function ImageCard({ image }: { image: imageType }) {
    const router = useRouter();

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [newName, setNewName] = useState(image.name);

    async function handleDelete() {
        const response = await fetch('/api/gallery', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageId: image.id }),
        })

        if (response.ok) {
            router.refresh();
        } else {
            alert('Failed to delete image');
        }

        return;
    }

    async function handleUpdate() {
        if (newName === image.name || newName.trim() === '') {
            setIsEditing(false);
            return;
        }

        const response = await fetch('/api/gallery', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageID: image.id, newName }),
        })

        if (response.ok) {
            router.refresh();
            setIsEditing(false);
        } else {
            alert('Failed to update image');
        }
    }

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
                { isEditing && (
                    <input type='text' className='w-full bg-white px-2 rounded-sm mt-2' value={newName} onChange={(e) => setNewName(e.target.value)} />
                )}
                <div className='flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300'>
                    {!isDeleting && !isEditing && (
                        <>
                        <button onClick={() => {setIsEditing(true)}} className='size-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 cursor-pointer'><span className='material-symbols-outlined text-xl'>edit</span></button>
                        <button onClick={() => {setIsDeleting(true)}} className='size-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 cursor-pointer'><span className='material-symbols-outlined text-xl'>delete</span></button>
                        </>
                    )}
                    { isEditing && (
                        <>
                        <button onClick={handleUpdate} className='bg-white/20 p-1 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-green-300/30 cursor-pointer'><span className='text-xl text-green-800'>Change</span></button>
                        <button onClick={() => {setIsEditing(false)}} className='size-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-300/30 cursor-pointer'><span className='material-symbols-outlined text-xl text-red-800'>cancel</span></button>
                        </>
                    )}
                    { isDeleting && (
                        <>
                        <button onClick={handleDelete} className='bg-white/20 p-1 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-green-300/30 cursor-pointer'><span className='text-xl text-green-800'>Delete</span></button>
                        <button onClick={() => {setIsDeleting(false)}} className='size-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-300/30 cursor-pointer'><span className='material-symbols-outlined text-xl text-red-800'>cancel</span></button>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}