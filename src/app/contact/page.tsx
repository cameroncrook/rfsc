import Image from "next/image";

// Modules
import MainNav from "@/components/mainNav";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="flex flex-1 items-center justify-center py-12 px-4">
                <div className="w-full max-w-lg space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h1>
                        <p className="mt-4 text-gray-600">Please reach out to us with any questions or inquiries.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                        <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined"> phone </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 ">Phone</h3>
                                <p className="text-sm text-gray-600 ">208-557-3207</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined"> email </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email</h3>
                                <p className="text-sm text-gray-600">cacrook@sd251.org</p>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </main>
        </div>
    );
}