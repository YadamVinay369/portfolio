import { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";
import BreakUp from "../../images/BreakUp.png";
import DonorHub from "../../images/DonorHub.png";
import ImageTracer from "../../images/ImageTracer.png";
import InsightRise from "../../images/InsightRise.png";
import Marime from "../../images/Marime.png";
import MermoryGame from "../../images/MemoryGame.png";
import Praanayam from "../../images/Praanayam.png";
import "./Portfolio.scss";

const portfolioData = [
  {
    id: 2,
    name: "DonorHub",
    image: DonorHub,
    link: "https://github.com/YadamVinay369/DonorHub",
  },
  {
    id: 2,
    name: "ImageTracer",
    image: ImageTracer,
    link: "https://github.com/YadamVinay369/ImageTracer",
  },
  {
    id: 2,
    name: "Marime",
    image: Marime,
    link: "https://github.com/YadamVinay369/Marime",
  },
  {
    id: 2,
    name: "InsightRise",
    image: InsightRise,
    link: "https://github.com/YadamVinay369/InsightRise",
  },
  {
    id: 3,
    name: "BreakUp",
    image: BreakUp,
    link: "https://github.com/YadamVinay369/BreakUp-JavaScript-Miniproject",
  },
  {
    id: 3,
    name: "MemoryGame",
    image: MermoryGame,
    link: "https://github.com/YadamVinay369/MemoryGame-JavaScript-MiniProject",
  },
  {
    id: 3,
    name: "Praanayam",
    image: Praanayam,
    link: "https://github.com/YadamVinay369/Praanayam-JavaScript-MiniProject",
  },
];

const filteredData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Games",
  },
];

const Portfolio = () => {
  const [filteredValue, setfilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setfilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteredData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__image-wrapper">
                <img src={item.image} alt="dummy data" />
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a
                      href={item.link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Github</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
