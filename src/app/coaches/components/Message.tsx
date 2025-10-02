'use client';

import React from "react";
import type { message as MessageType } from '@prisma/client';
import { useState } from "react";
import { useRouter } from "next/navigation";

type MessageProps = {
    data: MessageType;
}

const Message: React.FC<MessageProps> = ({data}) => {
    const router = useRouter();

    const [isDeleting, setIsDeleting] = useState(false);
    const [isViewing, setIsViewing] = useState(false);

    function handleViewToggle() {
        setIsViewing(!isViewing)
    }

    function handleDeleteClick() {
        setIsDeleting(true);
    }

    function handleCancleDelete() {
        setIsDeleting(false);
    }

    async function handleDelete() {
        try {
            const response = await fetch('/api/message', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message_id: data.message_id })
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete message');
            }
        } catch (error) {
            console.error('Error deleting message:', error);
            alert('An error occurred while deleting the message');
        }
        
    }

    return (
    <>
    <tr className="hover:bg-primary/5 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/90"><a className="text-blue-500 hover:text-blue-400" href={`mailto:${data.email}`}>{data.email}</a></td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.subject}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60 hidden lg:table-cell truncate max-w-xs">{data.message}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
            {!isDeleting ? (
                <>
                <button onClick={handleViewToggle} className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
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
    {isViewing && (
        <tr>
            <td colSpan={5} className="p-4">
                <button onClick={handleViewToggle} className="float-right cursor-pointer"><span className="material-symbols-outlined">close</span></button>
                <div className="space-y-2">
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> <a className="text-blue-500 hover:text-blue-400" href={`mailto:${data.email}`}>{data.email}</a></p>
                    <p><strong>Subject:</strong> {data.subject}</p>
                    <p><strong>Message:</strong> {data.message}</p>
                </div>
            </td>
        </tr>
    )}

    </>
)}

export default Message;