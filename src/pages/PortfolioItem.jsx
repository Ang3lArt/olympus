import styled from "styled-components";

let Image = styled.div`
  background-color: rgb(39, 39, 39);
  /* width: 30%; */
  height: ${(props) => (props.projectType == "signature" ? "200px" : "429px")};
  margin: 1% 2% 1% 0px;
  background-position: top center;
  background-size: cover;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

let ImgLink = styled.a`
  margin: 1% 2% 1% 0px;
  width: 30%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

function PortfolioItem(props) {
  return (
    <ImgLink href={props.img} target="_blank">
      <Image
        style={{ backgroundImage: `url(${props.img})` }}
        projectType={props.projectType}
      ></Image>
    </ImgLink>
  );
}

export default PortfolioItem;
