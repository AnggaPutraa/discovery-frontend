'use client'

import { format } from 'date-fns';
import { notFound } from "next/navigation";

type Props = {
    searchParams?: News
}

const NewsDetailPage = ({ searchParams }: Props) => {

    if ((searchParams && Object.entries(searchParams).length === 0 || !searchParams)) {
        return notFound();
    }

    const parsedDate = format(new Date(searchParams.published_at?.slice(0, 10) || Date.now()), 'dd MMMM yyyy');

    return (
        <main className="max-w-7xl mx-auto px-8 md:px-0 my-6">
            <h1 className="mb-2 text-center text-2xl font-bold">" <span className='italic'>{searchParams.title}</span> "</h1>
            <div className="h-[20rem] md:h-[36rem] w-full overflow-hidden rounded-lg">
                <img
                    src={searchParams.image === null ? 'https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png' : searchParams.image}
                    alt={searchParams.title}
                    className='h-[20rem] md:h-[36rem] w-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-150'
                />
            </div>
            <div className='my-2 flex divide-x-2 divide-gray-500 dark:divide-gray-400 space-x-4 justify-center'>
                <h2>Published by {searchParams.author === 'null' ? 'Unknown' : searchParams.author}</h2>
                <h2 className='pl-4'>Published at {parsedDate}</h2>
                <h2 className='pl-4'>Source from <span className='uppercase font-bold'>{searchParams.country || 'Unknown'}</span></h2>
            </div>
            <p className='indent-8 text-justify'>{searchParams.description}</p>
        </main>
    );
}

export default NewsDetailPage;