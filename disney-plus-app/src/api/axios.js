import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // 강사님 key 사용
    api_key: "b18e798ff377ef49f1c335283e7c43d6",
    // 언어 설정
    language: "ko-KR",
  },
});

export default instance;
