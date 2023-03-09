import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/request";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // 비동기요청
  const fetchData = async () => {
    try {
      // 현재 상영중인 영화 정보 가져오기
      const response = await axios.get(requests.fetchNowPlaying);
      // console.log(response);

      // 여러 영화 중, 영화 하나의 ID 가져오기
      // Math.random() 함수가 0~1 사이수이므로, 소수도 포함! 따라서 floor 사용
      const movieId =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ].id;

      // 특정 영화의 더 상세한 정보를 가져오기
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" },
      });

      console.log(movieDetail);
      setMovie(movieDetail);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(movie);
  if (!movie) return <div>로딩중</div>;

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            {movie.videos?.results[0]?.key ? (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            ) : null}
          </div>
          <p className="banner__description">{movie.overview}</p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <>
        {/* 동영상 나가기 버튼 */}
        <button onClick={() => setIsClicked(false)}>X</button>
        {/* 동영상 */}
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeContainer>
        </Container>
      </>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
`;

export default Banner;
