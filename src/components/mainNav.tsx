import React from 'react';

const MainNav: React.FC = () => (
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <span className="material-icons text-green-500 text-3xl">sports_soccer</span>
            <span className="ml-2 text-xl font-bold text-gray-800">Rigby Soccer</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-gray-600">
            <a className="hover:text-green-500 transition-colors" href="#">Home</a>
            <a className="hover:text-green-500 transition-colors" href="#">Schedule</a>
            <a className="hover:text-green-500 transition-colors" href="#">Contact</a>
            <a className="hover:text-green-500 transition-colors" href="#">Gallery</a>
            <a className="hover:text-green-500 transition-colors" href="#">About</a>
        </nav>

        <a className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors hidden md:block" href="#">Register to Play!</a>
        <button className="md:hidden">
            <span className="material-icons text-gray-800">menu</span>
        </button>
    </div>
);

export default MainNav;