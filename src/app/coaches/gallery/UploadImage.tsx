'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadImage() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files && e.target.files[0];
        setSelectedFileName(file ? file.name : null);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!selectedFileName) {
            setErrorMessage('Please select a file to upload');
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('/api/gallery', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setSelectedFileName(null);
                router.refresh();
                form.reset();
            } else {
                setErrorMessage(data.message);
            }

            return;

        } catch (err) {
            setErrorMessage('Failed to upload image');
        }
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">upload</span>
                    <span className="hidden lg:inline">Upload Image</span>
                </button>
            </div>

            <form className={`mb-6 ${isOpen ? '' : 'hidden'}`} onSubmit={handleSubmit}>
                <p className='bg-red-500 mb-2'>{errorMessage}</p>
                <p className='bg-green-500 mb-2'>{message}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>File Name</label>
                        <div className="mt-1">
                            <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" placeholder="Enter image name" type="text" required/>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor={"file"}>File</label>
                        <div className="mt-1">
                            {/* Hidden real file input */}
                            <input
                                id="file"
                                name="file"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                                required
                            />

                            {/* Visible styled dropzone / selector */}
                            <label
                                htmlFor="file"
                                className="flex items-center justify-between gap-3 w-full rounded-lg border-2 border-dashed border-gray-300 bg-white/40 px-4 py-3 cursor-pointer hover:border-primary focus-within:border-primary transition"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-2xl text-gray-500">file_upload</span>
                                    <div className="text-left">
                                        <div className="text-sm font-medium text-gray-700">Choose a file</div>
                                        <div className="text-xs text-gray-500">{selectedFileName ?? 'PNG, JPG, GIF up to 5MB'}</div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>

                <div className="text-end mt-8">
                    <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition shadow-lg cursor-pointer" type="submit">Upload</button>
                </div>
            </form>
        </div>
    )
}