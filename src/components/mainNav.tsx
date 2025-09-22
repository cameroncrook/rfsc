import React from 'react';

type MainNaveProps = {
    lightMode?: boolean; 
};

const MainNav: React.FC<MainNaveProps> = ({ lightMode }) => (
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <span className="material-icons text-primary text-3xl">sports_soccer</span>
            <span className={`ml-2 text-xl font-bold ${lightMode ? 'text-gray-200' : 'text-gray-800'}`}>Rigby Soccer</span>
        </div>

        <nav className={`hidden md:flex items-center space-x-8 ${lightMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <a className="hover:text-primary transition-colors" href="/">Home</a>
            <a className="hover:text-primary transition-colors" href="/schedule">Schedule</a>
            <a className="hover:text-primary transition-colors" href="/contact">Contact</a>
            <a className="hover:text-primary transition-colors" href="/about">About</a>
        </nav>

        <a className="bg-primary/90 text-white px-6 py-2 rounded-full hover:bg-primary transition-colors hidden md:block" href="/register">Register to Play!</a>
        <button className="md:hidden">
            <span className={`material-icons ${lightMode ? 'text-gray-200' : 'text-gray-800'}`}>menu</span>
        </button>
    </div>
);

export default MainNav;