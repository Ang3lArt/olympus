import "../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
const NavStyle = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 2;

  .menu {
    position: absolute;
    right: 5%;
    z-index: 3;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    margin-top: 5%;
  }

  .links {
    position: absolute;
    height: 100vh;
    width: 60vw;
    top: 0px;
    background: rgba(7, 7, 7, 0.86);
    backdrop-filter: blur(51px);
    right: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateX(100%);
    opacity: 0;
    a {
      padding-left: 10%;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;

      h1 {
        font-size: 60px;
        color: #545454 !important;
        margin: 30px 0px;
        display: block;
        transition: all 0.5s ease;

        &:hover {
          background: linear-gradient(
            113.85deg,
            #408aff 12.22%,
            #cd1fdc 51.49%,
            #f67b90 90.28%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        @media (max-width: 500px) {
          font-size: 24px;
        }
      }
    }
    @media (max-width: 500px) {
      width: 90vw;
    }
  }

  .showMenu {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },

  closed: {
    opacity: 0,
    x: "100%",
  },
};

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <NavStyle>
      <p
        className="menu"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        Menu
      </p>

      <motion.div
        className="links"
        animate={menuVisible ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <h1>Home</h1>
        </Link>
        <Link
          to="/portfolio"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <h1>Portfolio</h1>
        </Link>

        <Link
          to="/about"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <h1>About</h1>
        </Link>

        <Link
          to="/services"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <h1>Services</h1>
        </Link>
      </motion.div>
    </NavStyle>
  );
}

export default Nav;
