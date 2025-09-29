import Image from "next/image";

// Modules
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";

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

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>Your Name</label>
                            <div className="mt-1">
                            <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" placeholder="Enter your name" type="text"/>
                        </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"email"}>Your Email</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="email" name="email" placeholder="Enter your email" type="email"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"subject"}>Subject</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="subject" name="subject" placeholder="Enter the subject" type="text"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor={"message"}>Message</label>
                            <div className="mt-1">
                                <textarea className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="message" name="message" placeholder="Enter your message" rows={4}></textarea>
                            </div>
                        </div>
                        <div>
                            <button className="flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </main>
            <MainFooter />
        </div>
    );
}