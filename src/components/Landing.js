import React from "react";
import "../styles/layout/_landing.scss";
import Header from './Header'

const Landing = () => {
  return (
    <div className="landing">
      {/* Lo dejo preparado para el flex */}
      <Header/>
      <main className="landing__main">
        <div className="landing__main--video">
        <iframe src="https://www.youtube.com/embed/hJresi7z_YM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </main>
    </div>
  );
};

export default Landing;
