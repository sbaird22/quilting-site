const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-primary to-secondary text-teal-500 flex flex-col items-center justify-center p-8">
            <p className="text-lg mt-4 text-teal-300">
                Handmade quilts crafted with love and precision.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-300 text-primary font-semibold rounded-lg shadow-lg hover:bg-teal-300 transition">
                Request a Callback
            </button>
        </section>
    );
};
export default Hero;