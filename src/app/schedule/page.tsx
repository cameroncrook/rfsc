import Image from "next/image";

// Modules
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";

/! Follow design in Stitch but instead just go by month and show date with big bold letters. Vertical list with Date and then list of games. Display for entire month./ 

export default function Schedule() {
    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="min-h-96 px-4 py-12 mx-auto container">
                <h1 className="text-3xl font-bold text-gray-800">Schedule</h1>

                <div className="flex items-center justify-center mb-4">
                    <div className="space-y-4 w-52 flex items-center justify-between mb-4">
                        <button className="p-2 m-0 rounded-full hover:bg-slate-100 flex items-center cursor-pointer">
                            <span className="material-symbols-outlined text-slate-500">chevron_left</span>
                        </button>
                        <p className="font-semibold text-slate-900 m-0">October 2025</p>
                        <button className="p-2 m-0 rounded-full hover:bg-slate-100 flex items-center cursor-pointer">
                            <span className="material-symbols-outlined text-slate-500">chevron_right</span>
                        </button>
                    </div>
                </div>
            </main>
            <MainFooter />
        </div>
    );
}