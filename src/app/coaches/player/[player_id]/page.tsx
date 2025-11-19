import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export default async function ViewPlayer({
    params,
}: {
    params: Promise<{ player_id: string }>
}) {
    const session = await getServerSession();
    const coach = await prisma.coach.findUnique({
        where: { email: session?.user?.email || ''},
    })

    if (!coach?.player_access) {
        return <div>You do not have access to view this page.</div>;
    }

    const { player_id } = await params;
    const player = await prisma.player.findUnique({
        include: { waiver: true },
        where: { player_id: Number(player_id) },
    });

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-text-light">Player Summary</h1>

                <p className="text-subtext-light mt-2">A comprehensive overview of player details.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                <div className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                        <span className="material-symbols-outlined text-blue-700 text-3xl">person</span>
                        <h2 className="text-2xl font-bold ml-3">Player Information</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">First Name:</span>
                            <span className="font-semibold">{player?.first_name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Last Name:</span>
                            <span className="font-semibold">{player?.last_name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Date of Birth:</span>
                            <span className="font-semibold">{player?.date_of_birth?.toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Address:</span>
                            <span className="font-semibold">{player?.address}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">School:</span>
                            <span className="font-semibold">{player?.school}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Grade Level:</span>
                            <span className="font-semibold">{player?.grade_level}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Teacher:</span>
                            <span className="font-semibold">{player?.teacher}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Shirt Size:</span>
                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded-md text-sm">{player?.shirt_size}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                        <span className="material-symbols-outlined text-blue-700 text-3xl">family_restroom</span>
                        <h2 className="text-2xl font-bold ml-3">Parent Information</h2>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-700">Parent 1</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Name:</span>
                                    <span className="font-semibold">{player?.waiver?.p1_first_name} {player?.waiver?.p1_last_name}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Email:</span>
                                    <a className="font-semibold text-blue-700 hover:underline" href={`mailto:${player?.waiver?.p1_email}`}>{player?.waiver?.p1_email}</a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Phone:</span>
                                    <span className="font-semibold">{player?.waiver?.p1_phone}</span>
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-200"/>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-blue-700">Parent 2</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Name:</span>
                                    <span className="font-semibold">{player?.waiver?.p2_first_name} {player?.waiver?.p2_last_name}</span>
                                </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-subtext-light">Email:</span>
                                <a className="font-semibold text-blue-700 hover:underline" href={`mailto:${player?.waiver?.p2_email}`}>{player?.waiver?.p2_email}</a>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-subtext-light">Phone:</span>
                                <span className="font-semibold">{player?.waiver?.p2_phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                    <span className="material-symbols-outlined text-green-600 text-3xl">shield</span>
                    <h2 className="text-2xl font-bold ml-3 text-green-600">Permissions</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Photograph Permission:</span>
                        <span className={`font-semibold ${player?.waiver?.photo_permission ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.photo_permission ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Volunteer Interest:</span>
                        <span className={`font-semibold ${player?.waiver?.volunteer_interest ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.volunteer_interest ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Walk Home Permission:</span>
                        <span className={`font-semibold ${player?.waiver?.walk_home_permission ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.walk_home_permission ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Travel Permission:</span>
                        <span className={`font-semibold ${player?.waiver?.travel_permission ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.travel_permission ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">General Waiver Signed:</span>
                        <span className={`font-semibold ${player?.waiver?.general_waiver_signed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.general_waiver_signed ? 'Yes' : 'No'}</span>
                    </div>
                    <hr className="border-gray-200"/>
                    <div>
                        <p className="font-medium text-subtext-light">Signed:</p>
                        <p className="font-semibold text-lg">{player?.waiver?.signature}</p>
                        <p className="text-sm text-subtext-light">Date: {player?.waiver?.submitted_at.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-3 bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                    <span className="material-symbols-outlined text-red-500 text-3xl">medical_services</span>
                    <h2 className="text-2xl font-bold ml-3 text-red-500">Medical Information</h2>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium text-subtext-light">Emergency Contact:</p>
                        <p className="font-semibold text-lg">{player?.waiver?.emergency_name} ({player?.waiver?.emergency_phone})</p>
                        <p className="text-sm text-subtext-light">Relationship: {player?.waiver?.emergency_relation}</p>
                    </div>
                    <hr className="border-gray-200"/>
                    <div>
                        <p className="font-medium text-subtext-light">Medical Conditions or Allergies:</p>
                        <p className="font-semibold text-red-500">{player?.waiver?.medical_conditions}</p>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Auth for Emergency Care:</span>
                        <span className={`font-semibold ${player?.waiver?.emergency_care_consent ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.emergency_care_consent ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Liability Waiver:</span>
                        <span className={`font-semibold ${player?.waiver?.liability_waiver ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 py-1 rounded-md text-sm`}>{player?.waiver?.liability_waiver ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}   