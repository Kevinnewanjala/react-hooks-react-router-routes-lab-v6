import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie.title) {
    return <h1>Loading...</h1>;
  }

  const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
}

export default Movie;
