import React, { useState, useEffect } from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

// A component는 통으로 만들기
// B component는 컴포넌트를 최대한 쪼개서 만들기기

// A component => 더 성능이 좋음
// B component
//      => 최적화 되어 있지 않아 성능이 떨어짐
//      => state를 가지지 않는 부분도 불필요하게 렌더링 됨 (App, Message 만 되면 됨)

// 해결

// 01. React.memo 적용
// => B component의 컴포넌트들을 React.memo로 감싸줌으로써 속도 향상
// => A보다 빨라짐 & 불필요한 렌더링 x (List, ListItem 컴포넌트는 렌더링 x)

// 02. useCallback() 적용
// => input에 입력 시, 리랜더링되지 않던 컴포넌트도 렌더링 되는 현상 해결

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div style={{ display: "flex" }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
