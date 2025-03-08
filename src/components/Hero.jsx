const Hero = () => {
    return (
        <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/path-to-your-diamond-image.jpg')" }}>
            <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <div className="text-center text-white">
                    <h2 className="text-4xl md:text-6xl font-bold">Building Excellence Across Industries</h2>
                    <p className="mt-4 text-lg md:text-xl">Diamonds, Real Estate, Technology, Community</p>
                    <a href="#divisions" className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700 transition">
                        Explore Our Divisions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
