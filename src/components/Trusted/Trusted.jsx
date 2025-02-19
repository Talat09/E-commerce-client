import styled from "styled-components";
import leadMarketing from "../../assets/partner-image/lead.png";
import webForAll from "../../assets/partner-image/webforall.png";
import tecuvy from "../../assets/partner-image/tecuvy.png";


const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img src={leadMarketing} alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src={webForAll} alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src={tecuvy} alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src={leadMarketing} alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src={webForAll} alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: #004aad;
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted;
