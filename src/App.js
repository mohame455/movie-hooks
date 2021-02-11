import "./App.css";
import { movies } from "./Components/assets/Data";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";

function App() {
  const [listMovie, setListMovie] = useState(movies);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addMovie = (title, posterUrl, description, rate) => {
    setListMovie([ ...listMovie,{ title, posterUrl, description, rate }]);
  };
  return (
    <div className="container-fluid">
      <MovieList listMovie={listMovie} handleShow={handleShow} />
      <AddMovie show={show} handleClose={handleClose} addMovie={addMovie} />
    </div>
  );
}

export default App;
