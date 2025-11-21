import LoginForm from "./LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession();
    if (session) {
        redirect('/coaches/');
    }

    return (
        <div>
            <div className="flex flex-col items-center space-y-2 text-center">
                <span className="h-8 w-8 text-primary material-symbols-outlined">lock_person</span>
                <h1 className="text-3xl font-bold">Coaches Portal</h1>
                <p className="text-gray-500 mb-6">Welcome back! Please enter your credentials.</p>
            </div>
            
            <LoginForm />
        </div>
    )
}