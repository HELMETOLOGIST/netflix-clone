import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { MdKeyboardArrowRight } from "react-icons/md";


const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
            console.log(response.data);
        });
    }, [fetchURL]);
    console.log(movies);
    const slideLeft = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    console.log(rowID, title, fetchURL);
    return (
        <div className="py-5">
            <h2 className="text-white  font-bold md:text-xl  p-5">{title}</h2>
            <div className="relative flex items-center group">
                {/* <MdChevronLeft className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10' size={40} /> */}
                <MdKeyboardArrowLeft key={rowID} onClick={slideLeft} className='bg-white rounded-full mx-2 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

                <div id={"slider" + rowID} className="w-full h-full px-12 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                
               <div className="flex absolute right-0 -mt-10 justify-end">   
               <MdKeyboardArrowRight key={rowID} onClick={slideRight} className='bg-white   absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' size={40} />
               </div>
            </div>
        </div>
    );
};

export default Row;
