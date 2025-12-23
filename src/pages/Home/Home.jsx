import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar Sidebar={sidebar} />
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed/>
      </div>
    </>
  );
};

export default Home;
