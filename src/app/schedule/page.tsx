import Image from "next/image";

// Modules
import MainNav from "../../components/mainNav"

/! Follow design in Stitch but instead just go by month and show date with big bold letters. Vertical list with Date and then list of games. Display for entire month./ 

export default function Schedule() {
    return (
        <div className="font-sans">
            <header>
                <MainNav />
            </header>
        </div>
    );
}