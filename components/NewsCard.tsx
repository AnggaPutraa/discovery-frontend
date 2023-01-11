import { format } from 'date-fns'

type Props = {
    news: News
}

const NewsCard = ({ news }: Props) => {

    const parsedDate = format(new Date(String(news.published_at)), 'dd MMMM yyyy');

    return (
        <div className="p-4 rounded-lg bg-dark-secondary cursor-pointer">
            <div className="h-56 w-full overflow-hidden rounded-lg">
                <img
                    src={news.image === null ? 'https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png' : news.image}
                    alt={news.title}
                    className='h-56 w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-150'
                />
            </div>
            <div className="pt-2 flex flex-col justify-between">
                <h1 className="text-white font-semibold line-clamp-2">{news.title}</h1>
                <h1 className="text-gray-400 line-clamp-2">{news.description}</h1>
                <h1 className="text-gray-400 text-sm">Published at {parsedDate}</h1>
            </div>
        </div>
    );
}

export default NewsCard;