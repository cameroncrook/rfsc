import React from "react";
import type { game as GameType } from "@prisma/client";
import { formatGameDate } from "@/lib/utils";

type GameCardProps = {
    data: GameType;
};

const GameCard: React.FC<GameCardProps> = ({ data }) => (
    <div className="bg-primary/20 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
        <span className="material-icons text-primary text-4xl">event</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800">{data.name}</h3>
        <p className="text-gray-500 mb-2">{formatGameDate(data.date)}</p>
        <p className="text-gray-600">Join us at {data.location}</p>
    </div>
)

export default GameCard;