export const Movie = ({title, url, summary, genres}) => {
  return (
    <div>
    <h2>{title}</h2>
    <img src={url} alt={title}/>
    <p>{summary}</p>
    <ul>
      {genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>
  );
};
