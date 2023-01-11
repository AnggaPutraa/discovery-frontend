import { gql } from 'graphql-request'
import { categories } from '../constants'
import sortByImage from './helper';

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {

    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
        myQuery(
            access_key: $access_key
            countries: "us"
            categories: $categories
            sort: "published_desc"
            keywords: $keywords
        ) {
        data {
            author
            category
            country
            description
            image
            language
            published_at
            title
            url
            source
        }
        pagination {
            count
            limit
            offset
            total
        }
        }
    }
    `;
    
    const response = await fetch(
        'https://luofeng.stepzen.net/api/juiced-pug/__graphql',
        {
            method: "POST",
            cache: isDynamic ? "no-cache" : "default",
            next: isDynamic ? { revalidate: 0 } : { revalidate: 14400 },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords: keywords,
                },
            })
        }
    );

    const parseRes = await response.json();
    const news = sortByImage(parseRes.data.myQuery);
    return news;
}

export default fetchNews;