import React from 'react';

const Card = ({ name, movies }) => {
  const movieList = movies.map((movie, index) => <li key={index}>{movie}</li>);
  
  return (
    <article>
      <h2>{name}</h2>
      <ul>
        {movieList}
      </ul>
    </article>
  );
};

export default Card;
