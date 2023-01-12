import NewsList from "../../components/NewsList";
import fetchNews from "../../lib/request";

type Props = {
    searchParams?: {
        term: string
    }
}

const SearchPage = async ({ searchParams }: Props) => {
    const newsResponse: NewsResponse = await fetchNews(
        'general',
        searchParams?.term,
        true
    );

    return (
        <section className="max-w-7xl mx-auto px-8 mt-4">
            <h1 className="text-2xl mb-2 text-center md:text-start">Search results for <span className="font-bold">{searchParams?.term}</span></h1>
            <NewsList newsList={newsResponse} />
        </section>
    );
}

export default SearchPage;