import NewsCard from "./NewsCard";

type Props = {
    newsList: NewsResponse
}

const NewsList = ({ newsList }: Props) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.data?.map(
                (news, index) => <NewsCard
                    key={index}
                    news={news}
                />
            )}
        </section>
    );
}

export default NewsList;