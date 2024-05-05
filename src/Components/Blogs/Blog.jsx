import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../../contextStore/post-context-store";
const Blog = ({ post }) => {
  const { deletePost } = useContext(PostList);
  // console.log(post.id);
  return (
    <>
      <article
        className="flex max-w-xl flex-col items-start justify-between shadow-lg rounded-md px-10 py-5"
        key={post.id}
      >
        <span
          className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-lg font-medium text-red-700 ring-1 ring-inset ring-red-600/10 cursor-pointer"
          onClick={() => deletePost(post.id)}
        >
          <AiFillDelete />
        </span>
        <div className="group relative">
          <h3 className="mt-3 text-xs font-semibold text-gray-900">
            Id: {post.id}
          </h3>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.body}
          </p>
        </div>
      </article>
    </>
  );
};

export default Blog;
