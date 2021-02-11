import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { starList } from "./assets/Data";
import {Button} from 'react-bootstrap'

const MovieList = ({ listMovie,handleShow }) => {
  const [tabStar, setTabStar] = useState(starList);
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id ? { ...el, isColored: !el.isColored } : el
      )
    );
  };
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <div>
      <div className="header">
        <input type="text" placeholder="search" onChange={handleChange} />
        <div>
          {tabStar.map((el) => (
            <span
              className={el.isColored ? "gold" : "star"}
              key={el.id}
              onClick={() => changeColor(el.id)}
            >
              {el.icon}
            </span>
          ))}
        </div>
        <Button variant="secondary" onClick={handleShow} >add Movie</Button>
      </div>
      <div className="row">
        {listMovie
          .filter(
            (movie) =>
              movie.rate >= tabStar.filter((el) => el.isColored === true).length
          )
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
