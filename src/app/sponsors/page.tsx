import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import Link from "next/link";

export default function Sponsors() {
    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="">
                <section className="bg-white">
                    <div className="mx-auto max-w-3xl px-6 py-12">
                        
                        <header className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Thank You to Our Sponsor
                        </h1>
                        <p className="mt-3 text-base text-gray-600">
                            Honoring our cornerstone sponsor whose generosity makes free soccer possible for our community.
                        </p>
                        </header>

                        
                        <div className="mt-8 space-y-4 text-gray-700">
                        <p className="text-lg leading-8">
                            The Rigby Soccer Club proudly recognizes
                            <span className="font-semibold text-gray-900"> Madison Memorial Hospital </span>
                            as a cornerstone sponsor whose generosity makes free soccer possible for our community.
                        </p>
                        <p className="leading-7">
                            Madison Memorial Hospital’s mission is simple yet profound:
                            <span className="italic">to provide professional and compassionate healthcare to those they serve.</span>
                            Their vision—to be a first-class healthcare provider that instills pride in the community, medical staff, and employees—resonates deeply with the spirit of our club.
                        </p>
                        <p className="leading-7">
                            Just as soccer teaches respect, teamwork, and perseverance, Madison Memorial Hospital lives these values every day:
                        </p>
                        </div>

                        
                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 p-5">
                            <h3 className="text-lg font-semibold text-gray-900">Respect and Caring</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                            Every interaction is an opportunity to uplift others, honoring the dignity and wellbeing of all.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-5">
                            <h3 className="text-lg font-semibold text-gray-900">Integrity</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                            Through honesty, fairness, and accountability, they set the standard for trust—guiding healthcare and sportsmanship alike.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-5">
                            <h3 className="text-lg font-semibold text-gray-900">Initiative</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                            Their commitment to going the extra mile inspires our athletes to play with energy, creativity, and heart.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-5">
                            <h3 className="text-lg font-semibold text-gray-900">Teamwork</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                            By fostering unity and cooperation, they show that success is achieved together—on the field and in the hospital halls.
                            </p>
                        </div>
                        </div>


                        <div className="mt-8 space-y-4 text-gray-700">
                        <p className="leading-7">
                            Thanks to Madison Memorial Hospital, the Rigby Soccer Club is more than just a team—it’s a community where young athletes can grow, thrive, and dream big.
                            Their support ensures that every child has the chance to play, learn, and belong, regardless of circumstance.
                        </p>
                        <p className="leading-7">
                            On behalf of our players, families, and coaches, we extend our deepest gratitude. Madison Memorial Hospital is not only a healthcare provider—it is a champion of community, compassion, and opportunity.
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                            Thank you for standing with us, for believing in our mission, and for helping us build a stronger, healthier Rigby—one goal at a time.
                        </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <MainFooter />
            </footer>
        </div>
    )
}