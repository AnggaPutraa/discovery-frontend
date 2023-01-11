import NewsList from "../components/NewsList";
import { categories } from "../constants";
import fetchNews from "../lib/request";
import response from '../response.json';

const Homepage = async () => {

    const newsResponse: NewsResponse = response || await fetchNews(categories.join(','));

    return (
        <section className="max-w-7xl mx-auto px-8 mt-4">
            <NewsList newsList={newsResponse} />
        </section>
    );
}

export default Homepage;