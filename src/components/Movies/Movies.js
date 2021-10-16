import React, { useEffect, useState } from "react";
import NowShowing from "../NowShowing/NowShowing";

const Movies = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("./movieData.json")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <div className="container">
      <div className="my-4 row justify-content-between g-4">
        {shows.map((nowShow) => (
          <NowShowing key={nowShow.id} show={nowShow}></NowShowing>
        ))}
      </div>
    </div>
  );
};

export default Movies;
