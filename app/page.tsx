import NewsList from "../components/NewsList";
import { categories } from "../constants";
import fetchNews from "../lib/request";

const Homepage = async () => {

    const newsResponse: NewsResponse = await fetchNews(categories.join(','));

    return (
        <section className="max-w-7xl mx-auto px-8 mt-4">
            <NewsList newsList={newsResponse} />
        </section>
    );
}

export default Homepage;