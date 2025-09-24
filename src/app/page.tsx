import Image from "next/image";

// Modules
import MainNav from "@/components/mainNav";

export default function Home() {
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
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <span className="material-icons text-primary text-4xl">event</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">FMS vs RMS</h3>
                  <p className="text-gray-500 mb-2">August 28 @5:00PM 2025</p>
                  <p className="text-gray-600">Join us at the Rigby High School Field</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <span className="material-icons text-primary text-4xl">event</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">FMS vs RMS</h3>
                  <p className="text-gray-500 mb-2">August 28 @5:00PM 2025</p>
                  <p className="text-gray-600">Join us at the Rigby High School Field</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <span className="material-icons text-primary text-4xl">event</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">FMS vs RMS</h3>
                  <p className="text-gray-500 mb-2">August 28 @5:00PM 2025</p>
                  <p className="text-gray-600">Join us at the Rigby High School Field</p>
                </div>
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
              <p className="text-gray-600"><a className="text-primary font-semibold hover:underline" href="#">Send us a message</a> and we can help you donate.</p>
            </div>
          </section>

          <section className="py-20" id="sponsors">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Sponsors</h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="bg-white rounded-lg shadow p-6 h-32 w-48 flex items-center justify-center">
                  <Image alt="Sponsor logo placeholder" className="max-h-full max-w-full" src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC871QQftkqkx87q1m9NdgAevIFqWFbQ5fD7TET3hs9hBfyLiJA_WT0u4fWFwLZoHVrfTDwTznzBZ1JXZT9x4q027dAbMVYirP9-_DPfmqTgjV11HS-e5INSak-N8S3Q62r2lyFZYCM4XU59rJOl7tJg0U-hAF3hDjg9ddppDK7i8EzNd1cFUNTVa2-fMMDVGjQ2zOvidsk2LfhytfisFhuR5FnB3xSGuUkZbHDE0tqMii0dMxIHAa_6x-mVyVtuW-4fUzdEqPkOQ"} width={100} height={100} />
                </div>

                <div className="bg-white rounded-lg shadow p-6 h-32 w-48 flex items-center justify-center">
                  <Image alt="Sponsor logo placeholder" className="max-h-full max-w-full" src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCAV8EQD2LmAfNON1eSQkrWnDidU-G4UxIqkjGAUjumgwjZPJyYT8jw8gxvdkMaXJroEOwc7SZ_6JXFYeEQmE0GWYn5McXj_e5p13gx2NWSaZ14fHf0NsKivK-1Y0K0cUb58tFBXhxPWx9S4v6bBc9vcVYjk6IHhpTyujiNBwCPg0CHTAz-RduGleuzchGRvBybLN_YFueYGqHzQPLuX42qSyNgpzAwdWmJRXNX08ub4jhOTL-yholMr9ImNKzuMvnoCbclOnbUug"} width={100} height={100} />
                </div>

                <div className="bg-white rounded-lg shadow p-6 h-32 w-48 flex items-center justify-center">
                  <Image alt="Sponsor logo placeholder" className="max-h-full max-w-full" src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAPWg2e9Pnw_fsKUNHcojuBkrucRnJT8ba3LNwwbCSLTjn2zqcYfjHa1FxgwmMqOLSKpKjsKx6QKgBwyTO-95GSyBtKDgeDsoFw2bwprS5gjp3r-0z1KqQzohhqkIQx821xeCQwigL8BChrSAyO-qEJlippeOP-gX2GBAHqQZVMsXDq4q7yeNagaey-V6JZQBSjrqBchjtlw0633GBm6fFL65KzLKX_gF_0lbRgYR6XGAMUD3uarTp8J4ZTnXaTK1AjlLUAwV1ZYA"} width={100} height={100} />
                </div>

                <div className="bg-white rounded-lg shadow p-6 h-32 w-48 flex items-center justify-center">
                  <Image alt="Sponsor logo placeholder" className="max-h-full max-w-full" src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBYEXSFLz_0Zo1jWILmBjBsVz_x-Ib3RJjDKTGu6WjAx3mSuBR2-tvVm0-jUyBfkxUSa3b1nCSa6Vl0-KU6_oJ4o2R8upzlvzMsCGOh5MxGDoxKY0JQYYPSM-cgBTCw4z5queGcaEh-yJ2uQK2BI6bCeAOO9fVVzKdK15lykgONTJg_1UGybgMps0tIgffDM0RnDCzmG17-BLpyTnxWdiEm2YPQPMR2IinH-0A0y8d1szjlaZ98_bPhj-402Q16v-A_xjiGpWi6wA"} width={100} height={100} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
