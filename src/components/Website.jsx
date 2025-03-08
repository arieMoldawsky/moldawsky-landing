import React from 'react';

const Website = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-gray-800 text-sm">
                            Moldawsky Group
                            <div className="text-xs text-gray-600">25 sKierrying tra Centry</div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            {['BOUTIEK', 'DZIAŁALNOŚĆ', 'KONSORCJATION', 'RYNEK', 'SKIEROWE', 'AB', 'PL/ZK/DE', 'LM17'].map((item) => (
                                <button
                                    key={item}
                                    className="text-gray-700 hover:text-gray-900 text-xs tracking-wider transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Main Content */}
                    <div className="relative z-10 flex justify-between items-center">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
                                ME COILWONZI
                                <br />
                                GP OND GROUP
                            </h1>
                        </div>

                        <div className="text-white text-right">
                            <h2 className="text-xl font-light tracking-wider mb-2">
                                Group structure
                            </h2>
                            <p className="text-sm opacity-70 max-w-xs">
                                The Group is jointly managed by members following the footsteps of the founders
                            </p>
                        </div>
                    </div>

                    {/* Central Diamond Illustration */}
                    <div className="relative mt-12 flex justify-center">
                        <div className="w-[600px] h-[600px] relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="w-full h-full">
                                {/* Background Circle */}
                                <circle cx="400" cy="400" r="300" fill="#2A2A2A"/>

                                {/* Technical Grid Lines */}
                                <g stroke="#444444" strokeWidth="0.5">
                                    <path d="M100,400 L700,400" />
                                    <path d="M400,100 L400,700" />
                                    <circle cx="400" cy="400" r="200" fill="none"/>
                                    <circle cx="400" cy="400" r="250" fill="none"/>
                                </g>

                                {/* Left Cityscape */}
                                <g transform="translate(150,450)">
                                    <rect x="0" y="-120" width="20" height="120" fill="#333333"/>
                                    <rect x="30" y="-180" width="25" height="180" fill="#3A3A3A"/>
                                    <rect x="65" y="-150" width="20" height="150" fill="#333333"/>
                                    <rect x="95" y="-200" width="30" height="200" fill="#404040"/>
                                    <path d="M0,-120 L-20,-140 M30,-180 L10,-200 M95,-200 L75,-220" stroke="#444444" fill="none"/>
                                </g>

                                {/* Right Cityscape */}
                                <g transform="translate(550,450)">
                                    <rect x="-20" y="-120" width="20" height="120" fill="#333333"/>
                                    <rect x="-55" y="-180" width="25" height="180" fill="#3A3A3A"/>
                                    <rect x="-85" y="-150" width="20" height="150" fill="#333333"/>
                                    <rect x="-125" y="-200" width="30" height="200" fill="#404040"/>
                                    <path d="M0,-120 L20,-140 M-30,-180 L-10,-200 M-95,-200 L-75,-220" stroke="#444444" fill="none"/>
                                </g>

                                {/* Central Diamond */}
                                <g transform="translate(400,400)">
                                    <path d="M0,-150 L100,-50 L0,50 L-100,-50 Z" fill="#FFFFFF" opacity="0.9"/>
                                    <path d="M0,-150 L100,-50 L0,50 Z" fill="#E0E0E0" opacity="0.9"/>
                                    <path d="M0,-150 L50,-100 L0,-50 L-50,-100 Z" fill="#F5F5F5" opacity="0.8"/>
                                    <path d="M0,-50 L50,0 L0,50 L-50,0 Z" fill="#DADADA" opacity="0.8"/>
                                    <path d="M-20,-120 L20,-120 L0,-100 Z" fill="#FFFFFF" opacity="0.9"/>
                                    <g stroke="#666666" strokeWidth="0.5" fill="none">
                                        <path d="M-150,-150 L-100,-50 M150,-150 L100,-50"/>
                                        <path d="M-150,150 L-100,50 M150,150 L100,50"/>
                                    </g>
                                </g>

                                {/* Connecting Lines */}
                                <g stroke="#444444" strokeWidth="0.5" fill="none">
                                    <path d="M100,300 L300,400 M700,300 L500,400"/>
                                    <path d="M100,500 L300,400 M700,500 L500,400"/>
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Info Sections */}
                    <div className="mt-12 grid grid-cols-2 gap-32">
                        <div className="text-white">
                            <h3 className="text-sm tracking-wider mb-2">INVESTOR PATHWAY</h3>
                            <p className="text-xs opacity-70">Development of properties for commercial & residential use</p>
                        </div>
                        <div className="text-white">
                            <h3 className="text-sm tracking-wider mb-2">BUSINESS STRATEGY</h3>
                            <p className="text-xs opacity-70">Trading in land, acquisition of yielding assets</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
                <div className="grid grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Overview</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            The Group is jointly managed by Boaz Moldawsky and Yossi Moldawsky, second generation members of the family business who are following in the footsteps of the founders.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">Management</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Boaz and Yossi are responsible for the strategic development of the Group and for steering the respective policies of its different divisions.
                        </p>
                        <button className="mt-6 px-8 py-3 bg-gray-800 text-white text-sm tracking-wider hover:bg-gray-700 transition-colors">
                            MORE DETAILS
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-light tracking-wider text-gray-800 mb-4">News</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Our Group's philosophy is built on conducting business with integrity and mutual respect. Our decision-making processes are quick and efficient.
                        </p>
                        <button className="mt-6 px-8 py-3 border border-gray-300 text-sm tracking-wider hover:border-gray-800 transition-colors">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Website;