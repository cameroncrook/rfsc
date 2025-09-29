import React from "react";

const MainFooter: React.FC = () => (
    <footer className="bg-gray-800 text-white mt-20">
        <div className="container mx-auto px-6 py-10">
        <div className="flex md:flow-row justify-between items-center">
            <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Rigby Free Soccer Club</h3>
            <p className="text-gray-400">Building skills, friendship, and community.</p>
            </div>

            <div>
            <p>208-557-3207</p>
            <a href="mailto:cacrook@sd251.org" className="text-primary hover:underline">Email Us!</a>
            </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex justify-center mb-4">
            <a className="text-primary hover:underline" href="/coaches">Coaches Portal</a>
        </div>
        <p className="text-center text-gray-500 text-sm">© 2025 Rigby Free Soccer Club. All rights reserved.</p>
        </div>
    </footer>
);

export default MainFooter;