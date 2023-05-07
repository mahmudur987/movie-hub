/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  console.log(movie);
  // eslint-disable-next-line react/prop-types
  const { image, name, schedule, language, ended, genres, rating, id } =
    movie.show;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-3">
      <figure>
        <img
          className="max-w-3xl w-full min-h-8 h-full"
          src={image ? image.medium : ""}
          alt="the Image is un available"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>Release Date :{ended}</p>
        <p>Language :{language}</p>
        <p className="flex gap-2">
          Genere :
          {genres.map((x, y) => (
            <span key={y}>{x},</span>
          ))}
        </p>
        <p>Rating :{rating?.average}</p>
        <p>
          Shedule :{schedule?.days[0]},{schedule.time} pm
        </p>
        <div className="card-actions justify-end">
          <Link to={`booking/${id}`}>
            <button className="btn btn-info"> Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
