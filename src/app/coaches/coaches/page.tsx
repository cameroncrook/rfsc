import AddCoach from "./AddCoach";
import prisma from "@/lib/prisma";
import Coach from "../components/Coach";

export default async function coaches() {
    const coaches = await prisma.coach.findMany({include: { password_token: true }});

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Coaches Manager</h1>
            
            <AddCoach />

            <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-primary/5">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Name</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70">Email</th>
                                <th className="px-6 py-4 text-sm font-semibold text-black/70 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/10">
                            {coaches.map(coach => <Coach key={coach.coach_id} data={coach} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}