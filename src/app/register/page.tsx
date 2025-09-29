import Image from "next/image";

// Modules
import MainNav from "@/components/mainNav";
import RegistrationForm from "./registrationForm";
import MainFooter from "@/components/mainFooter";

export default function Register() {
    return (
        <div>
            <header className="bg-gray-50">
                <MainNav />
            </header>
            <main className="bg-gray-50 container mx-auto p-4 md:p-8 max-w-4xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Player Registration</h1>
                
                <RegistrationForm />
            </main>
            <MainFooter />
        </div>
    );
}