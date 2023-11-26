import { notFound } from "next/navigation";
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
  searchParams?: DataEntry;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const dataEntry: DataEntry = searchParams;
  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {dataEntry.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={dataEntry.image}
            alt={dataEntry.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {dataEntry.title}
          </h1>
          <div className="flex divided-x-2 space-x-4">
            <h2 className="font-bold">By: {dataEntry.author}</h2>
            <h2 className="font bold pl-4">Source: {dataEntry.source}</h2>
            <p className="pl-4">
              <LiveTimeStamp time={dataEntry.published_at}/>
            </p>
          </div>
          <p className="pt-4">{dataEntry.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
