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
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <div className="home__text-wrapper__contact-me">
            <button onClick={handleNavigateToContact}>Hire Me</button>
            <button>
              <a
                href="https://drive.google.com/file/d/1FLj2Tn0-PInerMALdT6uqSHDcLuy62Fo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
