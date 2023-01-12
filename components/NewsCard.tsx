'use client'

import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

type Props = {
    news: News
}

const NewsCard = ({ news }: Props) => {
    const router = useRouter();

    const parsedDate = format(new Date(String(news.published_at)), 'dd MMMM yyyy');

    const handleClick = () => {
        const queryParams = Object.entries(news)
            .map(([key, value]) => `${key}=${value}`).join('&');
        const url = `/news?${queryParams}`
        router.push(url)
    }

    return (
        <div
            className="p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary shadow-md cursor-pointer"
            onClick={handleClick}
        >
            <div className="h-56 w-full overflow-hidden rounded-lg">
                <img
                    src={news.image === null ? '/no-image.png' : news.image}
                    alt={news.title}
                    className='h-56 w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-150'
                />
            </div>
            <div className="pt-2 flex flex-col justify-between">
                <h1 className="text-black dark:text-white font-semibold line-clamp-2">{news.title}</h1>
                <h1 className="text-gray-500 dark:text-gray-400 line-clamp-2">{news.description}</h1>
                <h1 className="text-gray-400 text-sm">Published at {parsedDate}</h1>
            </div>
        </div>
    );
}

export default NewsCard;