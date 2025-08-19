import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to fetch directors");
        }
        return r.json();
      })
      .then(setDirectors)
      .catch(console.log);
  }, []);

  // --- helpers exposed to nested routes via Outlet context ---
  const getDirector = (id) =>
    directors.find((d) => String(d.id) === String(id));

  const getMovie = (directorId, movieId) => {
    const d = getDirector(directorId);
    if (!d) return null;
    return d.movies?.find((m) => String(m.id) === String(movieId)) || null;
  };

  const addMovie = (directorId, newMovie) => {
    setDirectors((prev) =>
      prev.map((d) =>
        String(d.id) === String(directorId)
          ? { ...d, movies: [...(d.movies || []), newMovie] }
          : d
      )
    );
  };

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>
        {/* all director components render here depending on route */}
        <Outlet context={{ directors, getDirector, getMovie, addMovie }} />
      </main>
    </>
  );
};

export default DirectorContainer;
