import "../App.css";
import styled from "styled-components";

const ServicesStyle = styled.div`
  .title {
    font-weight: 700;
    font-size: 30px;
  }

  .center {
    max-width: 600px;
    margin: 0 auto;
    display: block;
    margin-top: 100px;
    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      .service-title,
      .price {
        /* font-weight: 700; */
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        @media (max-width: 500px) {
          font-size: 16px;
        }
      }

      .line {
        flex: 1;
        height: 1px;
        background-color: white;
        margin: 0px 20px;
      }

      &:hover {
        .service-title,
        .price {
          font-weight: 700;
        }
      }
    }

    .payment {
      h2 {
        text-align: center;
        background: linear-gradient(
          113.85deg,
          #408aff 12.22%,
          #cd1fdc 51.49%,
          #f67b90 90.28%
        );
        border-radius: 20px;

        padding: 10px;
        text-transform: uppercase;
        font-size: 20px;
        margin-top: 50px;
      }
    }
  }
`;

function Services() {
  return (
    <ServicesStyle className="portfolio container">
      <p className="title">SERVICES</p>

      <div className="center">
        <div className="service-item">
          <p className="service-title">Static Logo</p>
          <div className="line"></div>
          <div className="price">$50</div>
        </div>
        <div className="service-item">
          <p className="service-title">Animated Logo</p>
          <div className="line"></div>
          <div className="price">$100</div>
        </div>

        <div className="service-item">
          <p className="service-title">Static Signature/Banner</p>
          <div className="line"></div>
          <div className="price">$25</div>
        </div>

        <div className="service-item">
          <p className="service-title">Animated Signature/Banner</p>
          <div className="line"></div>
          <div className="price">$50</div>
        </div>

        <div className="service-item">
          <p className="service-title">Static Refunding Threads</p>
          <div className="line"></div>
          <div className="price">$50</div>
        </div>

        <div className="service-item">
          <p className="service-title">Animated Refunding Threads</p>
          <div className="line"></div>
          <div className="price">$100</div>
        </div>

        <div className="service-item">
          <p className="service-title">Static Normal Threads</p>
          <div className="line"></div>
          <div className="price">$30</div>
        </div>

        <div className="service-item">
          <p className="service-title">Animated Normal Threads</p>
          <div className="line"></div>
          <div className="price">$60</div>
        </div>

        <div className="payment">
          <h2>We only accept cryptos</h2>
        </div>
      </div>
    </ServicesStyle>
  );
}

export default Services;
