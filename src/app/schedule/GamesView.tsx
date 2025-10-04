'use client'

import React from "react";
import { useState } from "react";
import type { game as GameType } from "@prisma/client";

type GamesViewProps = {
    games: GameType[];
}

const GamesView: React.FC<GamesViewProps> = ({ games }) => {
    const [listMode, setListMode] = useState(false);

    function setListModeTrue() {
        setListMode(true);
    }
    function setListModeFalse() {
        setListMode(false);
    }


    return (
        <>
        <div className="flex items-center justify-end gap-2">
            <button onClick={setListModeTrue} className={`px-4 py-2 text-sm font-semibold rounded-lg ${listMode ? 'bg-primary text-white' : 'text-slate-600 bg-slate-200 hover:bg-slate-300 cursor-pointer'}`}>All</button>
            <button onClick={setListModeFalse} className={`px-4 py-2 text-sm font-semibold rounded-lg ${!listMode ? 'bg-primary text-white' : 'text-slate-600 bg-slate-200 hover:bg-slate-300 cursor-pointer'}`}>Month</button>
        </div>

        {!listMode && (
            <div className="flex items-center justify-center mb-4">
                <div className="space-y-4 w-52 flex items-center justify-between mb-4">
                    <button className="p-2 m-0 rounded-full hover:bg-slate-100 flex items-center cursor-pointer">
                        <span className="material-symbols-outlined text-slate-500">chevron_left</span>
                    </button>
                    <p className="font-semibold text-slate-900 m-0">October 2025</p>
                    <button className="p-2 m-0 rounded-full hover:bg-slate-100 flex items-center cursor-pointer">
                        <span className="material-symbols-outlined text-slate-500">chevron_right</span>
                    </button>
                </div>
            </div>
        )}
        </>
    )
}

export default GamesView;