import React from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Main from "@/components/Home/Content";

const Home = () => {
  return (
    <div className="container px-5 mx-auto sm:px-0 xl:w-3/4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
