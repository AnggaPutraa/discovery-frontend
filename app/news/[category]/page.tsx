import NewsList from "../../../components/NewsList";
import fetchNews from "../../../lib/request";

type Props = {
    params: {
        category: Category
    }
}

const NewsCategoryPage = async ({ params: { category } }: Props) => {
    const newsResponse: NewsResponse = await fetchNews(category);
    return (
        <section className="max-w-7xl mx-auto px-8 mt-4">
            <NewsList newsList={newsResponse} />
        </section>
    );
}

export default NewsCategoryPage;