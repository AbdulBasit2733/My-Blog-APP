import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import BlogsList from "./Components/Blogs/BlogsList";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import PostListProvider from "./contextStore/post-context-store";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="mx-auto mt-10">
          {selectedTab === "Home" ? <BlogsList /> : <CreateBlog />}
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
