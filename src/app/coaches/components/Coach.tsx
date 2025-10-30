'use client';

import React from "react";
import { useState } from "react";
import type { Prisma } from '@prisma/client';

type CoachWithToken = Prisma.coachGetPayload<{ include: { PasswordToken: true } }>;

type CoachProps = {
    data: CoachWithToken;
}

const Coach: React.FC<CoachProps> = ({data}) => {
    const [isViewing, setIsViewing] = useState(false);
    
    function handleViewToggle() {
        setIsViewing(!isViewing);
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
                    <a href={`/coach/register/${data.PasswordToken[0]?.tokenHash}`}>Registration Link</a>
                </td>
            </tr>
        )}
        </>
    )
}

export default Coach;