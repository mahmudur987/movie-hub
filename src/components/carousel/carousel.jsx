/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Welcome to the Movie Hub",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Explore Amazing Movies and Shows",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Auto change every 5 seconds

    return () => clearInterval(interval);
  }, [carouselItems]);

  return (
    <header className="relative hero min-h-[500px] my-14">
      <div>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-content text-center w-full h-full flex justify-center gap-10 items-center flex-col">
              <h1 className="text-4xl lg:text-7xl text-yellow-200 font-bold">
                {item.title}
              </h1>
              <p className="text-xl lg:text-3xl text-green-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="my-11 relative hero min-h-screen">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 hero ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            // className="hero "
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </header>
  );
};

export default Carousel;
