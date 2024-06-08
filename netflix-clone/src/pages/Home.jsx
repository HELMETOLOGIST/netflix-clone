import React, { useState } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
import Modal from "../components/Modal";
import YouTube from "react-youtube";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [movie_details, setMovie_Details] = useState({});
  const [url_Id, setUrl_Id] = useState("");

  const opts = {
    height: "490",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="Up Coming"
        setUrl={setUrl_Id}
        setModal={setModal}
        setMovie_Details={setMovie_Details}
        fetchURL={requests.requestUpComing}
      />
      <Row
        rowID="2"
        title="Popular"
        setModal={setModal}
        setUrl={setUrl_Id}
        setMovie_Details={setMovie_Details}
        fetchURL={requests.requestPopular}
      />
      <Row
        rowID="3"
        title="Top Rated"
        setUrl={setUrl_Id}
        setModal={setModal}
        setMovie_Details={setMovie_Details}
        fetchURL={requests.requestTopRated}
      />
      <Row
        rowID="4"
        title="Trending"
        setUrl={setUrl_Id}
        setModal={setModal}
        setMovie_Details={setMovie_Details}
        fetchURL={requests.requestTrending}
      />
      <Row
        rowID="5"
        title="Now Playing"
        setUrl={setUrl_Id}
        setModal={setModal}
        setMovie_Details={setMovie_Details}
        fetchURL={requests.requestNowPlaying}
      />
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <div className="lg:w-[900px] w-full flex flex-col bg-black">
          <div className="w-full h-[500px] p-1 bg-slate-200 ">
            {url_Id && <YouTube videoId={url_Id} opts={opts} />}
          </div>
          <div className="grid sm:gap-16 text-white w-full grid-col-1 sm:grid-cols-3">
            <div className="w-full sm:col-span-2 h-full">
              <h1 className="text-3xl font-bold mt-4">
                {movie_details?.title}
              </h1>
              <div className="mt-5">
                <p className="text-md font-light">{movie_details?.overview}</p>
              </div>
            </div>

            <div className="w-full h-full space-y-5 mt-4">
              <p className="text-md font-semibold">
                Rating : {movie_details?.vote_average}
              </p>
              <p className="text-sm font-light">
                Year : {movie_details?.release_date}
              </p>
              <p className="text-sm font-light">
                Language : {movie_details?.original_language}
              </p>

              <p className="text-sm font-light">
                Popularity : {movie_details?.popularity}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
