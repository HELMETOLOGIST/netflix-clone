import axios from "axios";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { key } from "../Request";

const Movie = ({ item, setModal, setMovie_Details, setUrl }) => {
  const [like, setLike] = useState(false);

  const handleTrailer = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
      );
      if (response.data.results.length !== 0) {
        setUrl(response.data.results[0].key); // Only set the key, not the whole object
      } else {
        setUrl("");
      }
    } catch (error) {
      setUrl("");
    }
  };

  return (
    <div
      onClick={() => {
        setMovie_Details(item);
        setModal(true);
        handleTrailer(item.id);
      }}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[250px] inline-block cursor-pointer relative p-1"
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={() => setLike(!like)}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-red-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
