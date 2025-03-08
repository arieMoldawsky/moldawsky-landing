const divisions = [
    { name: "Diamonds", description: "Global leader in diamond trade.", image: "/diamond.jpg" },
    { name: "Real Estate", description: "Commercial & residential projects.", image: "/real-estate.jpg" },
    { name: "Technology", description: "Innovating across sectors.", image: "/technology.jpg" },
    { name: "Community", description: "Investing in social initiatives.", image: "/community.jpg" },
];

const Divisions = () => {
    return (
        <section id="divisions" className="py-20">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-semibold mb-8">Our Divisions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {divisions.map((division, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                            <img src={division.image} alt={division.name} className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <h4 className="text-xl font-bold">{division.name}</h4>
                                <p className="text-gray-600">{division.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Divisions;
