import React from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Blog from "../../components/blog/blog";
import "../blog/blog.page.css";

const Blogs = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Blog />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
