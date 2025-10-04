'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddGame() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formDataObj: Record<string, string | File> = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        try {
            const response = await fetch('/api/game', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });

            if (response.ok) {
                router.refresh();
                form.reset();
            } else {
                alert('Failed to create game');
            }
        } catch(error) {
            console.error(error);
        }
    }

    return <div>
                <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
                    <button onClick={toggleOpen} className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">add</span>
                        <span className="hidden lg:inline">New Game</span>
                    </button>
                </div>

                <form className={`mb-6 ${isOpen ? '' : 'hidden'}`} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>Name</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" placeholder="Enter event name" type="text" required/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"date"}>Date</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="date" name="date" placeholder="Enter event name" type="datetime-local" required/>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"location"}>Location</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="location" name="location" placeholder="Enter event name" type="text" required/>
                            </div>
                        </div>
                    </div>

                    <div className="text-end mt-8">
                        <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition shadow-lg" type="submit">Add</button>
                    </div>
                </form>
            </div>
}