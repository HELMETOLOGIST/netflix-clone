import React, { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";
import { key } from "../Request";
import Modal from "./Modal";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="min-w-full  h-[780px]">
          <div className="absolute w-full h-full  from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className=" absolute bg-gradient-to-t from-black  -mt-36 w-full min-h-[150px]"></div>
        </div>
        <div className="absolute space-y-5   w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-blod">{movie?.title}</h1>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm font-semibold">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[35%] font-semibold text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
