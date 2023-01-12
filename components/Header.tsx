import Link from "next/link";
import CategoriesNavigation from "./CategoriesNavigation";
import SearchBox from "./SearchBox";
import ThemeButton from "./ThemeButton";

const Header = () => {
    return (
        <header className="mt-8">
            {/* Discovery Text */}
            <div className="p-4 grid grid-cols-3 max-w-7xl mx-auto">
                <div className="w-6 hidden md:inline-flex" />
                <Link href={'/'}>
                    <h1 className="text-4xl md:text-6xl text-start md:text-center font-bold text-black dark:text-white ">Discovery</h1>
                </Link>
                <ThemeButton />
            </div>
            {/* Paragraph */}
            <div className="max-w-7xl mx-auto px-8">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm md:text-md mx-auto w-auto md:w-[750px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <CategoriesNavigation />
                <SearchBox />
            </div>
        </header>
    );
}

export default Header;