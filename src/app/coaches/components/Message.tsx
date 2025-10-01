'use client';

import React from "react";
import type { message as MessageType } from '@prisma/client';
import { useState } from "react";

type MessageProps = {
    data: MessageType;
}

const Message: React.FC<MessageProps> = ({data}) => {
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
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.subject}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60 hidden lg:table-cell truncate max-w-xs">{data.message}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
            {!isDeleting ? (
                <>
                <button className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
                <button onClick={handleDeleteClick} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
                </>
            ) : (
                <>
                <button className="text-green-500 hover:text-green-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">check</span></button>
                <button onClick={handleCancleDelete} className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">cancel</span></button>
                </>
            )}
            
        </td>
    </tr>
)}

export default Message;