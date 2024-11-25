import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";
import { Animate } from "react-simple-animate";
import "./About.scss";
import { FaDev, FaDatabase } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Yadam Vinay",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "Andhra Pradesh, India",
  },
  {
    label: "Email",
    value: "yadamvinay@gmail.com",
  },
  {
    label: "Phone",
    value: "+919390464027",
  },
];
const jobSummary =
  "I am a passionate web developer and a computer science student with a strong foundation in programming, data structures, and algorithms. My enthusiasm for coding drives me to create efficient, innovative solutions and continuously expand my technical expertise.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Full Stack Web Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0.2}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInfo">Personal Info</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0.2}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <TbBrandCpp size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaJava size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
