import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello I'm Vinay Yadam
          <br />
          Full Stack Web Developer
        </h1>
        <div className="home__text-wrapper__contact-me">
          <Animate
            play
            duration={0.5}
            delay={0}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <button onClick={handleNavigateToContact}>Hire Me</button>{" "}
          </Animate>
          <Animate
            play
            duration={0.7}
            delay={0}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <button
              onClick={() => {
                window.open(
                  "https://github.com/YadamVinay369",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <a
                href="https://github.com/YadamVinay369"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1J5_2Bjj_mFQVyAgsmdTbbq1qLMfQJJLJ?usp=drive_link",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <a
                href="https://drive.google.com/drive/folders/1J5_2Bjj_mFQVyAgsmdTbbq1qLMfQJJLJ?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Home;
