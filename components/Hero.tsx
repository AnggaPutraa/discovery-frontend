import CategoriesNavigation from "./CategoriesNavigation";
import SearchBox from "./SearchBox";

const Hero = () => {
    return (
        <section className="mt-8">
            {/* Discovery Text */}
            <div className="p-4 flex justify-center items-center">
                <h1 className="text-6xl font-bold text-white">Discovery</h1>
            </div>
            {/* Paragraph */}
            <div className="max-w-7xl mx-auto px-8">
                <p className="text-center text-gray-400 text-md mx-auto w-auto md:w-[750px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <CategoriesNavigation />
                <SearchBox />
            </div>
        </section>
    );
}

export default Hero;