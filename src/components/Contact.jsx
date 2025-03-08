const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
                <p className="mb-6">Reach out for partnerships, investments, or inquiries.</p>
                <form className="max-w-md mx-auto space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-gray-800" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-gray-800" />
                    <textarea placeholder="Your Message" className="w-full p-3 rounded text-gray-800" rows="4"></textarea>
                    <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
