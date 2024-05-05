import React, { useContext } from "react";
import Blog from "./Blog";
import { PostList } from "../../contextStore/post-context-store";
import WelcomeMessage from "../Message/WelcomeMessage";

const BlogsList = () => {
  const { postList, addInitialPosts } = useContext(PostList);
  // console.log(postList);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data));

  return (
    <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-5 lg:max-w-none lg:grid-cols-3">
      {postList.length === 0 && (
        <WelcomeMessage  />
      )}
      {postList.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogsList;
