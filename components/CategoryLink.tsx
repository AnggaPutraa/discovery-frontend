import Link from "next/link";

interface Props {
    category: string;
    isActive: boolean;
}

const CategoryLink = ({ category, isActive }: Props) => {
    return (
        <Link
            href={`/news/${category}`}
            className={`category-link ${isActive && 'bg-blue-500 text-white border-none font-semibold'}`}
        >
            {category}
        </Link>
    );
}

export default CategoryLink;