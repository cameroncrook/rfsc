import React from "react";
import type { player as PlayerType } from '@prisma/client';

type PlayerProps = {
    data: PlayerType;
}

const Player: React.FC<PlayerProps> = ({data}) => (
    <tr className="hover:bg-primary/5 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.first_name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.last_name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.school}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.grade_level}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
            <button className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
            <button className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
        </td>
    </tr>
)

export default Player;