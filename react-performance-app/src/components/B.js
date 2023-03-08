import React, { useCallback } from "react";

// const Message = ({ message }) => {
//   return <p>{message}</p>;
// };

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const List = React.memo(({ posts, testFunction }) => {
  // console.log("List is Rendering");
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const B = ({ message, posts }) => {
  // console.log("B is Rendering");
  // useCallback 함수 사용 : 메모이제이션 된 함수 반환
  const testFunction = useCallback(() => {});
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  );
};

export default B;
