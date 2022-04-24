import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "Web",
      title: "Web App",
    },
    // {
    //   id: "featured",
    //   title: "estudios",
    // },
    {
      id: "Mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Web":
        setData(webPortfolio);
        break;
      case "Mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((l) => (
          <PortfolioList
            title={l.title}
            active={selected === l.id}
            setSelected={setSelected}
            id={l.id}
          />
        ))}
      </ul>
      {selected === "Web" ? (
        <a href="henryfoodapp.vercel.app" className="link">
          Click para ver la pagina!
        </a>
      ) : (
        <a
          href="https://drive.google.com/file/d/1e7KLHJKGxZd5myMzYRzYiJ7-Bvithemi/view"
          className="link"
        >
          Click para ver video MobileApp!
        </a>
      )}

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
