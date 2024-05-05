import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className=" bg-blue-950 text-white w-[250px] h-[730px]">
      <ul className="w-[180px] mx-auto space-y-5">
        <li className="py-10" onClick={() => setSelectedTab("Home")}>
          <a className="flex items-center">
            <FaBloggerB className="w-[40px] h-[32px] mr-5" />
            <h1>Blog App</h1>
          </a>
        </li>
        <hr />
        <li onClick={() => setSelectedTab("Home")}>
          <a
            href="#"
            className={`flex items-center h-[35px] ${
              selectedTab === "Home" && "bg-blue-300 rounded-md"
            } `}
          >
            <AiFillHome className="w-[40px] h-[32px] mr-5" />
            <h1>Home</h1>
          </a>
        </li>
        <hr />
        <li onClick={() => setSelectedTab("Create Blog")}>
          <a
            href="#"
            className={`flex items-center h-[35px] ${
              selectedTab === "Create Blog" && "bg-blue-300 rounded-md"
            } `}
          >
            <AiFillPlusCircle className="w-[40px] h-[32px] mr-5" />
            <h1>Create Blog</h1>
          </a>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
