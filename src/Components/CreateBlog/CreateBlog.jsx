import React, { useContext, useRef } from "react";
import { PostList } from "../../contextStore/post-context-store";

const CreateBlog = () => {
  const { addPost } = useContext(PostList);
  const postTitleElement = useRef();
  const postContentElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    addPost(postTitle, postContent);
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
  };
  return (
    <form className="border px-[10rem] py-[2rem]" onSubmit={handleSubmit}>
      <div className="mb-3 flex flex-col">
        <label className="text-lg font-semibold">Post Title</label>
        <input
          ref={postTitleElement}
          className="border px-3 py-2 w-[20rem] rounded-md"
          placeholder="Enter Post Title"
          id="postTitle"
        />
      </div>
      <div className="mb-3 flex flex-col">
        <label className="text-lg font-semibold">Post Content</label>
        <textarea
          rows={4}
          ref={postContentElement}
          className="border px-3 py-2 w-[20rem] rounded-md"
          placeholder="Enter Post Content"
          id="postContent"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
