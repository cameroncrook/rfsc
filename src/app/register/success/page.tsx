// imports
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";

export default function RegisterSuccess() {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <MainNav />
            </header>
            <main className="grow flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mt-10">Registration Successful!</h1>
                <p className="mt-4 text-lg">Thank you for registering. We look forward to having you part of the team!</p>
            </main>
            <MainFooter />
        </div>
    );
}