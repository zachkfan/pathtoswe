import React from "react";
import HomeButton from "./home_button";
import Nav from "./home_nav";

const banner = () => {
  const bannerStyle = {
    backgroundImage: "url(/home_banner.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "550px", // Adjust the height as needed
    width: "100%", // Adjust the width as needed
  };
  return (
    <div className="flex flex-col items-center" style={bannerStyle}>
      <Nav />
      <h1 className="text-white text-8xl pt-10 font-extrabold animate-fadeInFromLeft1">
        {" "}
        PathToSWE
      </h1>
      <h1 className="text-white text-4xl py-5 font-semibold animate-fadeInFromLeft2">
        Charting your course to a Software Career
      </h1>
      <HomeButton></HomeButton>
    </div>
  );
};

export default banner;
