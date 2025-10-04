'use client';

import React from "react";
import type { game as GameType } from '@prisma/client';
import { useState } from "react";

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

const Game: React.FC<GameProps> = ({data}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    
    function handleDeleteClick() {
        setIsDeleting(true);
    }

    function handleCancleDelete() {
        setIsDeleting(false);
    }

    function handleDelete() {
        return;
    }

    return (
        <tr className="hover:bg-primary/5 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{formatGameDate(data.date)}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.location}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                {!isDeleting ? (
                    <>
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
    )
}

export default Game;