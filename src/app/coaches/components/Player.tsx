'use client'

import React from "react";
import { useState } from "react";
import Link from "next/link";
import type { Prisma } from '@prisma/client';

type PlayerWithWaiver = Prisma.playerGetPayload<{ include: { waiver: true } }>;

type PlayerProps = {
    data: PlayerWithWaiver;
}

const Player: React.FC<PlayerProps> = ({data}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    function handleViewToggle() {
        setIsViewing(!isViewing)
    }

    function handleDeleteToggle() {
        setIsDeleting(!isDeleting);
    }
    
    return (
        <>
        <tr className="hover:bg-primary/5 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.first_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.last_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.school}</td>
            <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.grade_level}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                {!isDeleting ? (
                    <>
                    <button onClick={handleViewToggle} className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
                    <button onClick={handleDeleteToggle} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
                    </>
                ) : (
                    <>
                    <button className="text-green-500 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">check</span></button>
                    <button onClick={handleDeleteToggle} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">cancel</span></button>
                    </>
                )}
                
            </td>
        </tr>

        {isViewing && (
            <tr>
                <td colSpan={5} className="p-4">
                    <button onClick={handleViewToggle} className="float-right cursor-pointer"><span className="material-symbols-outlined">close</span></button>
                    
                    <div className="space-y-4 p-2">
                        <div>
                            <p className="mb-4 font-bold">Parents</p>

                            <div className="ml-2 space-y-6">
                                <div className="space-y-2">
                                    <p className="font-medium">{data.waiver?.p1_first_name} {data.waiver?.p1_last_name}</p>
                                    <div className="ml-4 space-y-2">
                                        <p>{data.waiver?.p1_phone}</p>
                                        <a className="text-blue-500 hover:text-blue-400 transition-colors" href={`mailto:${data.waiver?.p1_email}`}>{data.waiver?.p1_email}</a>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="font-medium">{data.waiver?.p2_first_name} {data.waiver?.p2_last_name}</p>
                                    <div className="ml-4 space-y-2">
                                        <p>{data.waiver?.p2_phone}</p>
                                        <a className="text-blue-500 hover:text-blue-400 transition-colors" href={`mailto:${data.waiver?.p2_email}`}>{data.waiver?.p2_email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-black/10 pt-2 space-y-2">
                            <p className="mb-4 font-bold">Emergency Contact</p>

                            <div className="ml-2 space-y-2">
                                <p><span className="font-medium">Name: </span>{data.waiver?.emergency_name}</p>
                                <p><span className="font-medium">Relation: </span>{data.waiver?.emergency_relation}</p>
                                <p><span className="font-medium">Phone: </span>{data.waiver?.emergency_phone}</p>
                            </div>
                        </div>
                    </div>

                    <Link href={`/coaches/player/${data.player_id}`} className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 cursor-pointer">View Full Profile</Link>
                </td>
            </tr>
        )}
        </>
)}

export default Player;

// <Link href={`/coaches/player/${data.player_id}`} className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></Link>