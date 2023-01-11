import { categories } from "../constants";
import fetchNews from "../lib/request";


const Homepage = async () => {

    const news: NewsResponse = await fetchNews(categories.join(','));

    return (
        <section className="max-w-7xl mx-auto px-8 mt-4">
            Hello
        </section>
    );
}
 
export default Homepage;