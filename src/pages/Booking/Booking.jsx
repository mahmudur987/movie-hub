import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookingDetail from "./BookingDetail";

const Booking = () => {
  const movie = useLoaderData();
  return (
    <div>
      <Header />
      <BookingDetail movie={movie} />
    </div>
  );
};

export default Booking;
