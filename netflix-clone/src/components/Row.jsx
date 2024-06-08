import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Row = ({
  rowID,
  title,
  setModal,
  setMovie_Details,
  setUrl_Id,
  fetchURL,
  setUrl,
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="py-5">
      <h2 className="text-white font-bold md:text-xl p-5">{title}</h2>
      <div className="relative flex items-center group">
        <MdKeyboardArrowLeft
          onClick={slideLeft}
          className="bg-white rounded-full mx-2 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full px-12 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie
              key={id}
              setMovie_Details={setMovie_Details}
              setModal={setModal}
              item={item}
              setUrl_Id={setUrl_Id}
              setUrl={setUrl}
            />
          ))}
        </div>
        <MdKeyboardArrowRight
          onClick={slideRight}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
