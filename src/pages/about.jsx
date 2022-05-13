import head from "../assets/images/head.png";
import styled from "styled-components";

const AboutStyle = styled.div`
  .title {
    font-weight: 700;
    font-size: 30px;
  }
  .head {
    display: block;
    margin: 50px auto 0px auto;
    max-width: 300px;
    width: 100%;
    cursor: pointer;
  }

  .about-title {
    text-align: center;
    text-transform: uppercase;
    margin-top: 60px;
    max-width: 900px;
    margin: 60px auto 60px auto;
  }

  .links {
    margin-bottom: 50px;
    justify-content: center;
    display: flex;
    .button {
      margin: 1%;
      background-color: transparent;
      padding: 20px;
      border: 2px solid white;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      width: 150px;
      display: inline-block;
      text-align: center;
      transition: all 0.4s ease;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;

function About() {
  return (
    <AboutStyle className="about container">
      <p className="title">ABOUT US</p>
      <img src={head} alt="head" className="head" />

      <h1 className="about-title">
        We are a team of designers and developers dedicated in creating modern
        and stylish websites and designs.
      </h1>

      <div className="links">
        <a
          href="https://discord.gg/fwUcHPKAyV"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>

        <a
          href="https://discord.gg/fwUcHPKAyV"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </div>
    </AboutStyle>
  );
}

export default About;
