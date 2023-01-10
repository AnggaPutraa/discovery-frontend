'use client'

import { usePathname } from 'next/navigation'
import CategoryLink from "./CategoryLink";
import { categories } from "../constants";

const CategoriesNavigation = () => {
    const currentPath = usePathname();

    const isActive = (path: string) => {
        return currentPath?.split('/').pop() === path
    }

    return (
        <nav className="mt-4 flex flex-wrap justify-center gap-4">
            {categories.map(
                (item, index) => (
                    <CategoryLink
                        key={index}
                        category={item}
                        isActive={isActive(item)}
                    />
                )
            )}
        </nav>
    );
}

export default CategoriesNavigation;