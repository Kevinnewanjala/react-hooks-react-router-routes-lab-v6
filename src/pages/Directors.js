import React, { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() =>{
    const fetchDirectors = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDirectors();
  }, []);

  const directorList = directors.map(({ id, name, movies }) => (
    <Card key={id} name={name} movies={movies} />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
}

export default Directors;
