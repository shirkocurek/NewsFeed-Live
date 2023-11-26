import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  dataEntry: DataEntry;
};

function Article({ dataEntry }: Props) {
  return (
    <article className="bg-gray-200 dark:bg-zinc-800 flex flex-col rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {dataEntry.image && (
        <img
          src={dataEntry.image}
          alt={dataEntry.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-bold font-serif">{dataEntry.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2">{dataEntry.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{dataEntry.source} -</p>
            <p>
              <LiveTimeStamp time={dataEntry.published_at}/>
            </p>
          </footer>
        </div>
        <ReadMoreButton dataEntry={dataEntry}/>
      </div>
    </article>
  );
}

export default Article;
