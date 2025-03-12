import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen font-papyrus bg-purple-900 text-teal-300 flex flex-col items-center justify-center p-6">
            <div className="bg-teal-600 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-white text-lg mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-lg mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                        </div>

                        <div>
                            <label className="block text-white text-lg mb-2">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full p-3 rounded-lg bg-purple-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-400 text-purple-900 py-3 rounded-lg font-bold hover:bg-teal-500 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Call-back Request Section */}
                <div className="text-center mt-6">
                    <p className="text-lg">Prefer a call instead?</p>
                    <button className="mt-2 bg-teal-500 text-purple-900 py-2 px-6 rounded-lg font-bold hover:bg-teal-600 transition">
                        Request a Callback
                    </button>
                </div>

                    {/* Contact Details */}
                    <div className="mt-6 text-center text-white">
                        <p className="text-lg">📧 Email: info@quiltingbusiness.com</p>
                        <p className="text-lg">📞 Phone: (555) 123-4567</p>
                    </div>
            </div>
        </div>
    );
};

export default Contact;
