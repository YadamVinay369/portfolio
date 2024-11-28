import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";
import skillsData from "./utils";
import { Line } from "rc-progress";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader headerText="Skills" icon={<BsInfoCircleFill size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <h3 className="skills__content-wrapper__inner-content__category-text">
              {item.label}
            </h3>

            <div>
              {item.data.map((skillItem, j) => (
                <div className="progressbar-wrapper" key={j}>
                  <p>{skillItem.skillName}</p>
                  <div className="progressbar-wrapper__line">
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--green-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
