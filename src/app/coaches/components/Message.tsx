import React from "react";
import type { message as MessageType } from '@prisma/client';

type MessageProps = {
    data: MessageType;
}

const Message: React.FC<MessageProps> = ({data}) => (
    <tr className="hover:bg-primary/5 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-black/90 font-medium">{data.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60">{data.subject}</td>
        <td className="px-6 py-4 whitespace-nowrap text-black/60 hidden lg:table-cell truncate max-w-xs">{data.message}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
            <button className="text-black/90 hover:opacity-80 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">visibility</span></button>
            <button className="text-red-500 hover:text-red-400 p-2 rounded-full transtion-colors cursor-pointer"><span className="material-symbols-outlined">delete</span></button>
        </td>
    </tr>
)

export default Message;