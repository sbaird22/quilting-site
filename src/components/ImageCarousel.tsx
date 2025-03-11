import { useState, useEffect } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const nextModalImage = () => {
        setModalIndex((prev) => (prev + 1) % images.length);
    };

    const prevModalImage = () => {
        setModalIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isModalOpen]);

    return (
        <div className="relative max-w-lg mx-auto mt-6">
            <div className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => openModal(currentIndex)}
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-r-lg shadow-md hover:bg-gray-600 transition"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-l-lg shadow-md hover:bg-gray-600 transition"
            >
                ❯
            </button>

            {/* Modal for full-size image */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl relative overflow-auto max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
                        >
                            ✕
                        </button>

                        {/* Image Display */}
                        <img
                            src={images[modalIndex]}
                            alt="Full View"
                            className="w-full h-auto rounded"
                        />

                        {/* Modal Navigation */}
                        <button
                            onClick={prevModalImage}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextModalImage}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
