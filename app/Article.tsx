type Props = {
  dataEntry: DataEntry;
};

function Article({ dataEntry }: Props) {
  return (
    <article>
      {dataEntry.image && (
        <img
          src={dataEntry.image}
          alt={dataEntry.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div>
        <div>
          <h2>{dataEntry.title}</h2>
          <section>
            <p>{dataEntry.description}</p>
          </section>
          <footer>
            <p>{dataEntry.source} -</p>
            <p>{dataEntry.published_at}</p>
          </footer>
        </div>
        {/* read more */}
      </div>
    </article>
  );
}

export default Article;
