import React, { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    const fetchActors = async () => {
      try {
        const response = await fetch("http://localhost:4000/actors");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActors();
  }, []);

  const actorList = actors.map(({ id, name, movies }) => (
    <Card key={id} name={name} movies={movies} />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
