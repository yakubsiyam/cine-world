import React from "react";
import logo from "../../logo.png";
import proPic from "../../images/profile.jpg";

const About = () => {
  return (
    <div className="bg-dark py-3 px-5 text-center">
      <h1 className="text-danger">About Us</h1>
      <img className="w-25 p-5" src={logo} alt="" />
      <p className="text-white w-75 mx-auto">
        "The Cine World" is the ultimate digital network for all things movies,
        serving more than 40 million unique visitors per month globally with
        best-in-class movie information, ticketing to more than 45,000 screens,
        trailers and original video, home entertainment and fan merchandise. Its
        portfolio includes leading online ticketers Fandango, MovieTickets.com
        and Flixster in the U.S.; Ingresso in Brazil and Fandango Latin America,
        as well as world-renowned movie review site Rotten Tomatoes and
        Movieclips, the #1 movie trailers and content channel on YouTube.
        Fandango's movie discovery and ticketing innovations can also be found
        on mobile, social, AI and voice platforms from Apple, Facebook, Google,
        Amazon, and others.
      </p>
      <h1 className="text-danger mt-5 pt-5">About Developer</h1>
      <div className="text-white">
        <img className="w-25 rounded-circle p-5" src={proPic} alt="" />
        <h2>Siyam</h2>
        <p>4th Year, CSE, Tejgaon College</p>
      </div>
    </div>
  );
};

export default About;
