'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCoach() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSubmitting(true);

        const form = e.currentTarget;
        const formDataObj: Record<string, string | File> = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        try {
            const response = await fetch('/api/coach', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });

            if (response.ok) {
                router.refresh();
                form.reset();
                setIsSubmitting(false);
            } else {
                alert('Failed to create coach');
                setIsSubmitting(false);
            }
        } catch(error) {
            console.error(error);
        }
    }

    return <div>
                <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
                    <button onClick={toggleOpen} className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">add</span>
                        <span className="hidden lg:inline">New Coach</span>
                    </button>
                </div>

                {isOpen && (
                    <form className={`mb-6`} onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"email"}>Coach Email</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="email" name="email" type="email" required/>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 mt-4">
                            
                            <div className="flex align-center space-x-3">
                                <input type="checkbox" id="messages_access" name="messages_access" />
                                <label htmlFor="messages_access">Messages Access</label>
                            </div>

                            <div className="flex align-center space-x-3">
                                <input type="checkbox" id="games_access" name="games_access" />
                                <label htmlFor="games_access">Games Access</label>
                            </div>

                            <div className="flex align-center space-x-3">
                                <input type="checkbox" id="player_access" name="player_access" />
                                <label htmlFor="player_access">Player Access</label>
                            </div>

                            <div className="flex align-center space-x-3">
                                <input type="checkbox" id="coaches_access" name="coaches_access" />
                                <label htmlFor="coaches_access">Coaches Access</label>
                            </div>

                        </div>

                        <div className="text-end mt-8">
                            <button className={`${isSubmitting ? 'bg-gray-500' : 'bg-primary hover:bg-primary/80'} text-white font-bold py-3 px-8 rounded-lg transition shadow-lg`} disabled={isSubmitting} type="submit">{isSubmitting ? 'Adding...' : 'Add'}</button>
                        </div>
                    </form>
                )}
            </div>
}