'use client';

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Prisma } from '@prisma/client';

type CoachWithToken = Prisma.coachGetPayload<{ include: { password_token: true } }>;

type CoachProps = {
    data: CoachWithToken;
}

const Coach: React.FC<CoachProps> = ({data}) => {
    const router = useRouter();

    const [isViewing, setIsViewing] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    
    function handleViewToggle() {
        setIsViewing(!isViewing);
    }

    async function handleUpdatePermissions(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formDataObj: Record<string, string | File | Number> = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        formDataObj['coach_id'] = data.coach_id;

        try {
            const response = await fetch('/api/coach', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            })

            if (response) {
                const resData = await response.json();
                setMessage(resData.message);
            }

            if (response.ok) {
                router.refresh();
                form.reset();
            } else {

            }
        } catch(err) {
            console.error(err);
        }
    }

    async function handleShare() {
        const shareData = {
            title: 'Coach Registration Link',
            text: 'Use the link below to register as a coach:',
            url: `${window.location.origin}/coach/register/${data.password_token[0]?.token_hash}`,
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                alert('Oops, something went wrong');
            }
        } else {
            alert('Sharing not supported on this browser. Please copy the link: ' + shareData.url);
        }
    }

    return (
        <>
        <tr className="hover:bg-primary/5 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-black/90">{data.first_name} {data.last_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                <button onClick={handleViewToggle} className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
            </td>
        </tr>
        {isViewing && (
            <tr>
                <td colSpan={3} className="p-4">
                    <p className="mb-4 text-green-600">{message}</p>
                    <div>
                        <strong>Access Permissions:</strong>
                        <form onSubmit={handleUpdatePermissions}>
                            <div className="flex flex-col space-y-2 mt-4">
                            
                                <div className="flex align-center space-x-3">
                                    <input type="checkbox" id="messages_access" name="messages_access" defaultChecked={!!data.messages_access} />
                                    <label htmlFor="messages_access">Messages Access</label>
                                </div>

                                <div className="flex align-center space-x-3">
                                    <input type="checkbox" id="games_access" name="games_access" defaultChecked={!!data.games_access} />
                                    <label htmlFor="games_access">Games Access</label>
                                </div>

                                <div className="flex align-center space-x-3">
                                    <input type="checkbox" id="player_access" name="player_access" defaultChecked={!!data.player_access} />
                                    <label htmlFor="player_access">Player Access</label>
                                </div>

                                <div className="flex align-center space-x-3">
                                    <input type="checkbox" id="coaches_access" name="coaches_access" defaultChecked={!!data.coaches_access} />
                                    <label htmlFor="coaches_access">Coaches Access</label>
                                </div>

                            </div>

                            <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors cursor-pointer">Update Permissions</button>
                        </form>
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <strong>Settings:</strong>
                        {data.password_token[0] && (
                            <button onClick={handleShare} className="bg-green-500 text-white p-2 rounded-md cursor-pointer hover:bg-green-600">Send registration link</button>
                        )}
                        <button className="bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-600">Delete Coach</button>
                    </div>
                </td>
            </tr>
        )}
        </>
    )
}

export default Coach;