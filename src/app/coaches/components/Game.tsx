'use client';

import React from "react";
import type { game as GameType } from '@prisma/client';
import { useState } from "react";
import { useRouter } from "next/navigation";

type GameProps = {
    data: GameType;
}

function formatGameDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };
    // Format: "Oct 23, 2025, 5:00 PM"
    const formatted = date.toLocaleString('en-US', options);
    // Rearrange to "Oct 23 @ 5:00PM, 2025"
    const [monthDay, year, time] = formatted.match(/^([A-Za-z]+ \d+), (\d+), (.+)$/)!.slice(1);
    return `${monthDay} @ ${time.replace(' ', '')}, ${year}`;
}

function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const Game: React.FC<GameProps> = ({data}) => {
    const router = useRouter();

    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [name, setName] = useState(data.name);
    const [date, setDate] = useState(toDateInputValue(data.date));
    const [location, setLocation] = useState(data.location || '');
    
    function handleDeleteClick() {
        setIsDeleting(true);
    }

    function handleCancleDelete() {
        setIsDeleting(false);
    }

    async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await fetch('/api/game', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.game_id,
                name,
                date,
                location,
            }),
        })

        const responseData = await response.json();
        if (response.ok) {
            setMessage(responseData.message);
            router.refresh();
        } else {
            setErrorMessage(responseData.message);
        }
    }

    async function handleDelete() {
        const response = await fetch('/api/game', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.game_id,
            }),
        })

        const responseData = await response.json();
        if (response.ok) {
            router.refresh();
        } else {
            setErrorMessage(responseData.message);
        }
    }

    return (
        <>
        <tr className="hover:bg-primary/5 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{formatGameDate(data.date)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                {!isDeleting ? (
                    <>
                    <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500 hover:text-blue-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">edit</span></button>
                    <button onClick={handleDeleteClick} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
                    </>
                ) : (
                    <>
                    <button onClick={handleDelete} className="text-green-500 hover:text-green-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">check</span></button>
                    <button onClick={handleCancleDelete} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">cancel</span></button>
                    </>
                )}
            </td>
        </tr>
        {isEditing && (
            <tr>
                <td colSpan={4} className="p-4">
                    {message && <p className="mb-4 text-green-600">{message}</p>}
                    {errorMessage && <p className="mb-4 text-red-600">{errorMessage}</p>}
                    <form className="space-y-3" onSubmit={handleEdit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>Name</label>
                                <div className="mt-1">
                                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" placeholder="Enter event name" type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} required/>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor={"date"}>Date</label>
                                <div className="mt-1">
                                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="date" name="date" placeholder="Enter event name" type="datetime-local" value={date} onChange={(e) => setDate(e.currentTarget.value)} required/>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor={"location"}>Location</label>
                                <div className="mt-1">
                                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="location" name="location" placeholder="Enter event name" type="text" value={location} onChange={(e) => setLocation(e.currentTarget.value)} required/>
                                </div>
                            </div>
                        </div>

                        <div className="text-end mt-8">
                            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition shadow-lg" type="submit">Change</button>
                        </div>
                    </form>
                </td>
            </tr>
        )}
        </>
    )
}

export default Game;