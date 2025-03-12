import ImageCarousel from "../components/ImageCarousel";

const applique = [
    "/images/appl1.webp",
    "/images/appl2.webp",
    "/images/appl3.webp",
];

const traditionalQuilts = [
    "/images/trad1.webp",
    "/images/trad2.webp",
    "/images/trad3.webp",
];

const Gallery = () => {
    return (
        <div className="font-papyrus w-full min-h-screen bg-purple-950 p-10 text-teal-300">
                <h2 className="text-4xl font-bold text-center mb-8">Our Quilt Collections</h2>
            <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional Quilts */}
                <div className="bg-teal-300 p-6 rounded-lg shadow-lg text-black">
                    <h3 className="text-2xl font-semibold text-teal-700">Traditional Quilts</h3>
                    <p className="text-gray-700">
                        Traditional quilts are known for their intricate patterns and vintage charm. Often made with classic fabrics, they are a staple in heritage quilting. Used more like a blanket.
                    </p>
                    <ImageCarousel images={traditionalQuilts} />
                </div>

                {/* Applique Quilts */}
                <div className="bg-teal-300 p-6 rounded-lg shadow-lg text-black">
                    <h3 className="text-2xl font-semibold text-teal-700">Appliqué Quilts</h3>
                    <p className="text-gray-700">
                        Appliqué quilts feature fabric shapes sewn onto a base fabric, creating detailed designs and storytelling through textiles.
                        Typically used for warmth, these quilts are often used as wall hangings or decorations.
                    </p>
                    <ImageCarousel images={applique} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
