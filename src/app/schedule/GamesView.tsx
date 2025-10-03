import React from "react";
import { useState } from "react";
import type { game as GameType } from "@prisma/client";

type GamesViewProps = {
    games: GameType[];
}

const GamesView: React.FC<GamesViewProps> = ({ games }) => {
    const [listMode, setListMode] = useState(true);

    function setListModeTrue() {
        setListMode(true);
    }
    function setListModeFalse() {
        setListMode(false);
    }


    return (
        <>
        <div className="flex items-center gap-2">
            <button onClick={setListModeTrue} className={`px-4 py-2 text-sm font-semibold rounded-lg ${listMode ? 'bg-primary text-white' : 'text-slate-600 bg-slate-200 hover:bg-slate-300'}`}>List</button>
            <button onClick={setListModeFalse} className={`px-4 py-2 text-sm font-semibold rounded-lg ${!listMode ? 'bg-primary text-white' : 'text-slate-600 bg-slate-200 hover:bg-slate-300'}`}>Month</button>
        </div>
        </>
    )
}

export default GamesView;