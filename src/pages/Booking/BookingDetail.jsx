import { useState } from "react";
import BookingForm from "./BookingForm";

/* eslint-disable react/prop-types */
const BookingDetail = ({ movie }) => {
  const [show, setShow] = useState(false);
  const { name, averageRuntime, ended, genres, image, summary } = movie;
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-8">
        <div className="max-w-screen-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-[500px] object-cover"
            src={image?.original}
            alt="Movie Poster"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p className="text-gray-600 mb-4">Release Date: {ended}</p>
            <p className="text-gray-600 mb-4">
              Duration: {averageRuntime} minutes
            </p>
            <p className="text-gray-600 mb-4">
              Genre:{" "}
              {genres.map((x, y) => (
                <span key={y}>{x},</span>
              ))}
            </p>
            <p className="text-gray-600 mb-4">
              Description:{" "}
              <span dangerouslySetInnerHTML={{ __html: summary }}></span>
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-xl font-bold">Price: $10</p>
                <p className="text-gray-600">Available Seats: 50</p>
              </div>

              {show && <BookingForm setShow={setShow} movie={movie} />}
              <label
                onClick={() => setShow(true)}
                htmlFor="my-modal-6"
                className=" btn px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Booked Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
