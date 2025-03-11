import Hero from '../components/Hero';

const Home = () => {
    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary text-teal-500 flex flex-col items-center justify-center p-8">
            <Hero />
        </main>
    );
};

export default Home;