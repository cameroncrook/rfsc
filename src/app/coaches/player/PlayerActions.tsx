'use client';

import React from "react";
import type { Prisma } from '@prisma/client';
import * as XLSX from 'xlsx';

type PlayerWithWaiver = Prisma.playerGetPayload<{ include: { waiver: true } }>;

type PlayerActionsProps = {
    players: PlayerWithWaiver[];
}

export default function PlayerActions({ players }: PlayerActionsProps) {
    const handleExport = () => {
        const playerData = players.map(player => {
            const dobFormatted = player.date_of_birth
                ? player.date_of_birth.toLocaleDateString()
                : undefined;

            const submittedFormatted = player.waiver?.submitted_at ? player.waiver.submitted_at.toLocaleDateString() : undefined;

            return {...player, date_of_birth: dobFormatted, ...player.waiver, submitted_at: submittedFormatted };
        });

        const worksheet = XLSX.utils.json_to_sheet(playerData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Players');
        XLSX.writeFile(workbook, 'players.xlsx');
    };

    return (
        <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 mb-8">
            <button className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">filter_alt</span>
                <span className="hidden lg:inline">Filter</span>
            </button>
            <button onClick={handleExport} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">sheets_rtl</span>
                <span className="hidden lg:inline">Export to Sheet</span>
            </button>
        </div>
    )
}
