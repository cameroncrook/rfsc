import prisma from "@/lib/prisma";

export default async function ViewPlayer({
    params,
}: {
    params: Promise<{ player_id: string }>
}) {
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
                        <span className="material-icons-outlined text-primary text-3xl">person</span>
                        <h2 className="text-2xl font-bold ml-3">Player Information</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">First Name:</span>
                            <span className="font-semibold">Person</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Last Name:</span>
                            <span className="font-semibold">Guy</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Date of Birth:</span>
                            <span className="font-semibold">5/2/2004</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Address:</span>
                            <span className="font-semibold">111 n place</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">School:</span>
                            <span className="font-semibold">Harwood</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Grade Level:</span>
                            <span className="font-semibold">5</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Teacher:</span>
                            <span className="font-semibold">Davis</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-subtext-light">Shirt Size:</span>
                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded-md text-sm">XL</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                        <span className="material-icons-outlined text-primary text-3xl">family_restroom</span>
                        <h2 className="text-2xl font-bold ml-3">Parent Information</h2>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">Parent 1</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Name:</span>
                                    <span className="font-semibold">Mamma mom</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Email:</span>
                                    <a className="font-semibold text-primary hover:underline" href="mailto:mymom@moms.com">mymom@moms.com</a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Phone:</span>
                                    <span className="font-semibold">111-111-1111</span>
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-200"/>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">Parent 2</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-subtext-light">Name:</span>
                                    <span className="font-semibold">Dadda dad</span>
                                </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-subtext-light">Email:</span>
                                <a className="font-semibold text-primary hover:underline" href="mailto:mymom@moms.com">mymom@moms.com</a>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-subtext-light">Phone:</span>
                                <span className="font-semibold">222-222-2222</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                    <span className="material-icons-outlined text-red-500 text-3xl">medical_services</span>
                    <h2 className="text-2xl font-bold ml-3 text-red-500">Medical Information</h2>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium text-subtext-light">Emergency Contact:</p>
                        <p className="font-semibold text-lg">Mom (111-111-1111)</p>
                        <p className="text-sm text-subtext-light">Relationship: Mom</p>
                    </div>
                    <hr className="border-gray-200"/>
                    <div>
                        <p className="font-medium text-subtext-light">Medical Conditions or Allergies:</p>
                        <p className="font-semibold text-red-500">Is blind and def</p>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Auth for Emergency Care:</span>
                        <span className="font-semibold bg-red-100 dark:bg-red-900 text-red-800 px-2 py-1 rounded-md text-sm">No</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-subtext-light">Liability Waiver:</span>
                        <span className="font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">Yes</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}   