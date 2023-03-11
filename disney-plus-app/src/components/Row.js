import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import MovieModal from './MovieModal/MovieModal';
import "./Row.css";

import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, [])

  const fetchMovieData = async () => {
    try {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = (movie) => {
    setMovieSelected(movie);
    setIsModalOpen(true);
  }
  // console.log(movieSelected);

  return (
    <div>
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
      >

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>

      </Swiper>


      {isModalOpen ?
        <MovieModal
          {...movieSelected}
          setIsModalOpen={setIsModalOpen}
        />
        : null
      }

    </div>
  )
}

export default Row