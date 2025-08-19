import { useParams, useOutletContext } from "react-router-dom";

export default function MovieCard() {
  const { id: directorId, movieId } = useParams();
  const { getMovie } = useOutletContext();
  const movie = getMovie?.(directorId, movieId);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      {typeof movie.time === "number" && <p>Duration: {movie.time} minutes</p>}
      {Array.isArray(movie.genres) && movie.genres.length > 0 && (
        <p>{movie.genres.join(", ")}</p>
      )}
    </div>
  );
}
