export const dynamic = "force-dynamic";

import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import Message from '@/app/coaches/components/Message';

export default async function messages() {
    const session = await getServerSession();
    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || ''},
    })

    if (!coach?.messages_access) {
        return <div>You do not have access to view this page.</div>;
    }

    const messages = await prisma.message.findMany({
        orderBy: { date: 'desc'}
    });

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Site Messages</h1>
            
            <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/5">
                            <tr>
                                <th className='px-6 py-4 text-sm font-semibold text-black/70'>Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Email</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70 hidden lg:table-cell">Subject</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/10">
                            {messages.map((msg) => (
                                <Message key={msg.message_id} data={msg} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}