import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';

const DetailPage = () => {



  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `movie/${movieId}`
      )
      console.log(response);
      setMovie(response.data);
    }

    fetchData();
  }, [movieId])

  return (
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  )
}

export default DetailPage