import "../App.css";
import styled from "styled-components";
import PortfolioItem from "./PortfolioItem";
import { useState } from "react";

const PortfolioStyle = styled.div`
  .title {
    font-weight: 700;
    font-size: 30px;
  }

  .portfolio-service {
    margin-top: 61px;

    .service-title {
      display: flex;
      align-items: center;

      h2 {
        text-transform: uppercase;
      }
      .line {
        background-color: white;
        width: 120px;
        height: 1px;
        margin-left: 1rem;
      }
    }

    .projects {
      margin-top: 47px;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

function Portfolio() {
  let [threadList, setThreadList] = useState([
    "https://media.discordapp.net/attachments/950552216870207528/951081433231933510/armani2.png?width=351&height=701",
    "https://cdn.discordapp.com/attachments/870772399312867398/957912425410199552/rover-larger.png",
    "https://cdn.discordapp.com/attachments/870772399312867398/951467733164359700/snoopydoggy-thread.png",
    "https://media.discordapp.net/attachments/945055470853455885/947141846407200768/WEEDS_7.png?width=319&height=701",
  ]);

  let [signatureList, setsignatureList] = useState([
    "https://imgur.com/ZWclauZ.gif",
    "https://cdn.discordapp.com/attachments/956357268453097473/959646056235270215/700x300.gif",
    "https://imgur.com/GgAirUX.gif",
    "https://cdn.discordapp.com/attachments/954178063950819388/961997728165007400/Poseidon_Signature.jpg",
    "https://imgur.com/Dt30GKo.gif",
  ]);

  let [logoList, setLogoList] = useState([
    "https://cdn.discordapp.com/attachments/870776739163414538/888406228835921930/Petrov_Design_presintation.png",
    "https://cdn.discordapp.com/attachments/870776739163414538/926113596327477258/Bolicforum_Logo_Presintation.png",
    "https://cdn.discordapp.com/attachments/870776739163414538/926113763797643264/XRPL_Logo_Presintation.png",
    "https://cdn.discordapp.com/attachments/870776739163414538/926113795036839976/SellDash_Logo_Presintation.png",
  ]);

  let [websiteList, setwebsiteList] = useState([
    "https://i.imgur.com/xaVLTndh.png",
    "https://i.imgur.com/CMnAZvGh.jpg",
    "https://i.imgur.com/7q3zJUfh.jpg",
    "https://i.imgur.com/E5Ndklwh.jpg",
  ]);
  return (
    <PortfolioStyle className="portfolio container">
      <p className="title">PORTFOLIO</p>

      <div className="portfolio-service">
        <div className="service-title">
          <h2 className="service-title">Threads</h2>
          <div className="line"></div>
        </div>

        <div className="projects">
          {threadList.map((thread, i) => {
            return <PortfolioItem img={thread} key={i} />;
          })}
        </div>
      </div>

      <div className="portfolio-service">
        <div className="service-title">
          <h2 className="service-title">Signatures</h2>
          <div className="line"></div>
        </div>

        <div className="projects">
          {signatureList.map((signature, i) => {
            return (
              <PortfolioItem
                img={signature}
                key={i}
                projectType={"signature"}
              />
            );
          })}
        </div>
      </div>

      <div className="portfolio-service">
        <div className="service-title">
          <h2 className="service-title">Logo</h2>
          <div className="line"></div>
        </div>

        <div className="projects">
          {logoList.map((signature, i) => {
            return <PortfolioItem img={signature} key={i} />;
          })}
        </div>
      </div>

      <div className="portfolio-service">
        <div className="service-title">
          <h2 className="service-title">Websites</h2>
          <div className="line"></div>
        </div>

        <div className="projects">
          {websiteList.map((signature, i) => {
            return <PortfolioItem img={signature} key={i} />;
          })}
        </div>
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
