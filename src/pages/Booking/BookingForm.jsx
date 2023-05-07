/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { json } from "react-router-dom";

const BookingForm = ({ movie, setShow }) => {
  const { name, id } = movie;
  //   console.log(movie);

  const [formData, setFormData] = useState({
    movieName: name,
    name: "",
    email: "",
    phone: "",
    id: id,
    price: 10,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShow(false);
    let existingData = localStorage.getItem("userData");

    let userData = [];
    if (existingData) {
      userData = JSON.parse(existingData);
    }

    userData.push(formData);

    if (formData.name == "" || formData.email == "" || formData.phone === "") {
      //   setShow(true);
      return alert("please provide yor correct information");
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    setShow(false);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Booking for
              </label>
              <input
                readOnly
                type="text"
                id="name"
                name="name"
                value={formData.movieName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div onClick={handleSubmit} className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                coonfirm
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
