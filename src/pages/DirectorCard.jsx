import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

export default function DirectorCard() {
  const { id } = useParams();
  const { getDirector } = useOutletContext();
  const director = getDirector(id);

  if (!director) return <h2>Director not found</h2>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="movies/new">Add New Movie</Link>
      <Outlet context={{ director }} />
    </div>
  );
}
