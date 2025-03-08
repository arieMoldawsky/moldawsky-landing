const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-xl font-bold text-gray-800">Moldawsky Group</h1>
                <nav>
                    <ul className="flex space-x-4 text-gray-600">
                        <li><a href="#about" className="hover:text-blue-600">About</a></li>
                        <li><a href="#divisions" className="hover:text-blue-600">Divisions</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        <li><button className="text-sm border px-2 py-1 rounded">עברית</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
