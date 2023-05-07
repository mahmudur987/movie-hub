import { useEffect, useState } from "react";
import MovieCard from "../../components/Card/MovieCard";
import Header from "../../components/Header/Header";
import Carousel from "../../components/carousel/carousel";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let url = "https://api.tvmaze.com/search/shows?q=love";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <Header />
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
