import styled from "styled-components";
import head from "../assets/images/head.png";
import "../App.css";
import { motion } from "framer-motion";

const HomeStyle = styled.div`
  .title {
    font-weight: 700;
    font-size: 30px;
  }

  .head {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    filter: grayscale(100%);
    cursor: pointer;
    &:hover {
      filter: grayscale(0%);
    }
  }

  .footer {
    position: absolute;
    bottom: 10%;
    font-weight: 700;
    font-size: 20px;
  }
`;

function Home() {
  return (
    <HomeStyle className="home container">
      <motion.p
        className="title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        THE OLYMPUS
      </motion.p>
      <a href="https://discord.gg/fwUcHPKAyV" target="_blank">
        <img src={head} alt="head" className="head" />
      </a>
      <motion.p
        className="footer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {" "}
        PROVIDING SERVICE SINCE 2018
      </motion.p>
    </HomeStyle>
  );
}

export default Home;
