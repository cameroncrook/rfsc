export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

// Modules
import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import GameCard from "@/components/GameCard";

export default async function Home() {
  
  const today = new Date();
  const games = await prisma.game.findMany({
    where: {
      date: { gte: today }
    },
    orderBy: { date: "asc" },
    take: 3,
  });

  return (
    <div>
      <header className="row-start-1 w-full bg-[url(https://static.wixstatic.com/media/64980d_39bcbf63560941a5920bf8be1051397f~mv2.jpg/v1/fill/w_599,h_580,al_b,q_80,enc_avif,quality_auto/64980d_39bcbf63560941a5920bf8be1051397f~mv2.jpg)] bg-cover bg-center bg-gray-600 bg-blend-overlay">
        <MainNav lightMode={true} />
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Rigby Free Soccer Club</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">Our free soccer program has already helped 1,000+ students build skills, make friends, and boost school attendance. No fees, just fun. Register now and be part of the team!</p>

          <a className="bg-primary/90 text-white px-8 py-4 rounded-full hover:bg-primary transition-colors text-lg font-semibold shadow-lg" href="/register">Register Now</a>
        </section>
      </header>
      <main>
        <div className="bg-gray-100">
          <section className="py-20" id="about">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We are a passionate group of volunteers dedicated to providing a free, safe, and fun soccer program for the youth of Rigby. Our mission is to foster a love for the game, promote teamwork, and build character in a positive and inclusive environment. We believe every child should have the opportunity to play, regardless of their financial situation.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20" id="events">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.length && games.length > 0 ? (
                    games.map(game => <GameCard key={game.game_id} data={game} />)
                ) : (
                    <p className="text-center py-6 col-span-3 text-gray-600">No upcoming games. Check back later!</p>
                )}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Donate so we can keep playing!</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Write a check made out to: <span className="font-semibold">Jefferson Education Foundation</span>, and mail to:</p>
              <div className="bg-gray-100 rounded-lg p-6 inline-block mb-6">
                <p className="text-gray-800">A. Greenfield @ Farnsworth Middle School</p>
                <p className="text-gray-800">306 N 3700 E, Rigby, ID 83442</p>
              </div>
              <p className="text-2xl text-gray-500 mb-6">OR</p>
              <p className="text-gray-600"><a className="text-primary font-semibold hover:underline" href="/contact">Send us a message</a> and we can help you donate.</p>
            </div>
          </section>

          <section className="py-20" id="sponsors">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Sponsors</h2>
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="flex-shrink-0">
                            <div className="h-64 md:h-full md:w-64 bg-cover bg-center bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAUM6veSK4IOdY1Yn24k0wJbKlNa7geaZrxE58lbSUEKK9Hd77VE1vd7Dx30L8mJ0YnXzVTFxn7qcILyus_K8TRM4hIqIW6JsVm0dOPlxPmLDxYq2aTG4uS7N-dNtX5znjEp4gCJlWIeIXGW5n6Dknte6xjP0HuDnESUmZlpaYYD2ZUN5Tq5vP3qbBFiPnMniJVMSJKWXsvKQtJtucdNRpfGBWUyh7yTcCB1BiJ8Rhf-wYihvCvmTAJk3SOLclYDCQv3s6juax9Qy0)]">
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-primary font-semibold">Proud Sponsor</div>
                            <h1 className="mt-2 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Madison Memorial Hospital</h1>

                            <p className="mt-4 text-lg text-gray-600">
                              The Rigby Soccer Club proudly thanks Madison Memorial Hospital for making free soccer possible in our community. Guided by their mission of professional and compassionate healthcare, they embody values we share on the field—respect, integrity, initiative, and teamwork. 
                            </p>

                            <p className="mt-2 text-lg text-gray-600">
                              Their support ensures every child has the chance to play, grow, and belong. We are grateful for their commitment to building a stronger, healthier Rigby—one goal at a time.
                            </p>

                            <div className="mt-6">
                                <Link className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300" href={"https://madisonhealth.org/"}>Visit Their Website</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
