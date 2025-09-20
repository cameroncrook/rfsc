import Image from "next/image";

// Modules
import MainNav from "../../components/mainNav"

export default function About() {
    return (
        <div className="font-sans">
            <header>
                <MainNav />
            </header>
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Meet Our Team</h1>

                <div className="flex flex-col lg:flex-row items-center content-center mb-20">
                    <div className="lg:w-1/3 text-center flex flex-col content-center items-center lg:text-left lg:pr-12 mb-8 lg:mb-0">
                        <Image src="https://avatar.iran.liara.run/public/boy" alt="Alex Greenfield" className="w-48 h-64 rounded-lg shadow-lg mb-4" width={192} height={256} />

                        <h2 className="text-2xl font-semibold text-gray-800">Alex Greenfield</h2>
                        <p className="text-gray-500">Founder</p>
                    </div>
                    <div className="lg:w-2/3 text-gray-600 leading-relaxed space-y-4">
                        <p>My name is Alex Greenfield. I live in Rexburg with my wife and our three daughters. I’ve been teaching for over 25 years. I am from New York City. I graduated from Colgate University in 1993.</p>
                        <p>I'm currently the Department Head for Special Education at Farnsworth Middle School an I'm a doctoral program and own Mamoru Martial Arts. I started Rigby Free Soccer at RMS six years ago after two guidance counselor friends (Kim Aebil and Devvin Johnson) gave me the idea. We noticed that certain demographics were underperforming academically and behaviorally and thought if we motivated them with a sport they love, they would achieve more. The stat-geatistics indicated that students who participated in the program had better attendance!</p>
                        <p>We started out with five students and have now served close to 1000. We survive on volunteerism and fundraising. Our annual budget is about $6,000. All the funds we raise go directly to the students via coaches, referees, and t-shirts. There is no administrative expenditure. I take no salary. We would love the program to continue.</p>
                        <p>We need donations. You can find the donation button on our home page and at the top of every page.</p>
                        <p>Thank you for allowing your kids to participate, and for cheering them on so lovingly. What a great community we have! We want to make sure that this experience exceeds your expectations, so please contact me anytime with advice!</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <Image src="https://avatar.iran.liara.run/public/boy" alt="Austin Barnes" className="mx-auto w-48 h-64 rounded-lg shadow-lg mb-4" width={192} height={256} />

                        <h3 className="text-xl font-semibold text-gray-800">Austin Barnes</h3>
                        <p className="text-gray-500 mb-4">Coach</p>
                        <p className="text-gray-600 leading-relaxed">I'm Austin Barnes, I was born and raised in Idaho Falls, Idaho. I am married to my beautiful wife Rachel. Together we attend BYU-I. There I am studying Software Engineering. Since I was little I have loved and played soccer! My favorite professional team is FC Barcelona. When I am not studying or playing soccer I enjoy playing games, watching movies, and spending time with my family.</p>
                    </div>

                    <div className="text-center">
                        <Image src="https://avatar.iran.liara.run/public/boy" alt="Stephane Joiseus" className="mx-auto w-48 h-64 rounded-lg shadow-lg mb-4" width={192} height={256} />

                        <h3 className="text-xl font-semibold text-gray-800">Stephane Joiseus</h3>
                        <p className="text-gray-500 mb-4">Coach</p>
                        <p className="text-gray-600 leading-relaxed">My name is Stephan Joiseus, I'm from Rexland, FL and currently studying marketing at BYU-Idaho. My soccer career started at an early age, continued through high school and I still play to this day. I've always enjoyed playing soccer and want to be apart of bringing this game to others.</p>
                    </div>

                    <div className="text-center">
                        <Image src="https://avatar.iran.liara.run/public/boy" alt="Mitchell Behunin" className="mx-auto w-48 h-64 rounded-lg shadow-lg mb-4" width={192} height={256} />

                        <h3 className="text-xl font-semibold text-gray-800">Mitchell Behunin</h3>
                        <p className="text-gray-500 mb-4">Coach</p>
                        <p className="text-gray-600 leading-relaxed">Hi! My name is Mitchell Behunin. I am from Rigby, Idaho and graduated from Rigby High School in 2015! I have a long line of soccer players in my family and have played since I was 5 years old! I love playing most sports! I love the great outdoors! I enjoy all forms of camping, hiking, skiing, snowboarding, wakeboarding, wake surfing, and riding motorcycles! I look forward to being with you this season!</p>
                    </div>
                </div>
            </main>
        </div>
    );
}