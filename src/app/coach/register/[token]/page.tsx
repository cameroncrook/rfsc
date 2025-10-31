import RegisterForm from './RegisterForm';

export default async function Register({
    params,
}: {
    params: Promise<{ token: string }>
}) {
    const { token } = await params;

    return (
        <div>
            <div className="flex flex-col items-center space-y-2 text-center mb-4">
                <span className="h-8 w-8 text-primary material-symbols-outlined">lock_person</span>
                <h1 className="text-3xl font-bold">Coaches Portal</h1>
                <p className="text-gray-500">Welcome! Register your new account.</p>
            </div>
            <RegisterForm token={token} />
        </div>
    )
}