import React from "react";

const About = () => {
    return (
        <div className="font-papyrus min-h-screen bg-purple-950 text-purple-950 flex items-center justify-center px-6 py-12">
            <div className="bg-teal-300 p-8 rounded-lg shadow-lg max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-purple-950 mb-4">About Izabela Pokora</h1>
                {/* Owner Image Placeholder */}
                <div className="flex justify-center mb-6">
                    <img 
                    src="/images/owner.png" 
                    alt="Izabela Pokora" 
                    className="w-48 h-48 object-cover rounded-full border-4 border-purple-950 shadow-md"
                    />
                </div>

                {/* About Section */}
                <p className=" text-purple-950 text-lg leading-relaxed">
                    Izabela Pokora, based in Minnesota, has a deep passion for quilting. 
                    She dedicates her time to making beautiful, handcrafted quilts, often volunteering 
                    to teach quilting techniques to beginners. She cherishes her close-knit circle 
                    of quilting friends and makes it a priority to attend every quilting retreat she can.
                </p>

                {/* Call to Action */}
                <div className="mt-6">
                    <button className="bg-white text-teal-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
