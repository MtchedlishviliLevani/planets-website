import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import { planetColors, planetNames } from "../data/data";
import { media } from "../utils/customMediaBreaks";

interface activeLink {
  $activeLink: string;
  $activeIndex: number;
  key: number;
  $key: number;
}

function Root() {
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function renderPlanet() {
      const copiedPlanetNames = [...planetNames];
      copiedPlanetNames[0] = "";
      const index = copiedPlanetNames.findIndex(
        (planet) => `/${planet}` === location.pathname
      );
      if (index !== -1) {
        setActiveIndex(index);
        setActiveColor(planetColors[index]);
      }
    }
    renderPlanet();
  }, [location.pathname]);

  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <div>
              <StyledLogo to="/">THE PLANETS</StyledLogo>
            </div>
            <BurgerMenuPhoto
              src="../../src/assets/images/menu-icon.svg"
              alt=""
              onClick={() => setIsOpen(!isOpen)}
            />

            <Nav $isOpen={isOpen}>
              <Ul>
                {planetNames.map((planet, index) => (
                  <StyledLink
                    key={index}
                    to={index == 0 ? `/` : `/${planet}`}
                    $activeLink={activeColor}
                    $activeIndex={activeIndex}
                    $key={index}
                    onClick={() => setIsOpen(!open)}
                  >
                    {planet}
                    <span>{">"}</span>
                  </StyledLink>
                ))}
              </Ul>
            </Nav>
          </HeaderWrapper>
        </Container>
      </Header>
      <>
        {!isOpen && (
          <Container>
            <Body activeIndex={activeIndex} activeColor={activeColor} />
          </Container>
        )}
      </>
    </>
  );
}
const Container = styled.div`
  max-width: calc(1440px - 32px - 32px);
  width: 90%;
  margin: auto;
`;

const Header = styled.header`
  padding: 22px 0;
  border-color: ${({ theme }) => theme.colors.primaryTextColor};
  border-style: solid;
  border-width: 0 0 1px 0;
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  ${media.phone} {
    transform: translate(-50%, -50%);
    left: ${(props) => (props.$isOpen ? "50%" : "-50%")};
    transition: all 1s ease;
    top: 67%;
    position: absolute;
    flex-direction: column;
    width: 100%;
    padding: 0 5%;
    background-color: #070724;
    z-index: 1;
    height: 100vh;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.tablet} {
    flex-direction: column;
    gap: 40px;
  }
  ${media.phone} {
    flex-direction: row;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 40px;
  ${media.phone} {
    flex-direction: column;
    gap: 36px;
  }
`;

const StyledLink = styled(Link) <activeLink>`
  text-transform: ${({ theme }) =>
    theme.typograpthy.NavigationLink.textTransform};
  font-size: ${({ theme }) => theme.typograpthy.NavigationLink.FontSize};
  font-weight: ${({ theme }) => theme.typograpthy.NavigationLink.FontWeight};
  letter-spacing: ${({ theme }) =>
    theme.typograpthy.NavigationLink.letterSpacing};
  font-family: ${({ theme }) => theme.typograpthy.NavigationLink.fontFamily};
  color: white;
  position: relative;

  ${media.phone} {
    border: solid rgb(256, 256, 256, 0.1);
    border-width: 0 0 1px 0;
    display: flex;
    padding-left: 45px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding-bottom: 20px;
  }
  & ::before {
    ${media.phone} {
      content: "";
      background-color: ${(props) =>
    planetColors[props.$key] ? planetColors[props.$key] : ""};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 3%;
      top: 20%;
    }
  }
  & > div,
  & > span {
    display: none;
    ${media.phone} {
      display: block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -310%;
    left: 50%;
    width: 100%;
    height: 5px;
    background-color: ${(props) =>
    props.$activeIndex === props.$key ? props.$activeLink : ""};
    transform: translate(-50%, -50%);
    /* Add other styles as needed */

    ${media.tablet} {
      top: -210%;
    }
    ${media.phone} {
      content: initial;
    }
  }
  &:hover::before {
    background-color: ${(props) =>
    props.$activeIndex !== props.$key && planetColors[props.$key]
      ? planetColors[props.$key]
      : ""};
  }
`;

const StyledLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  text-transform: ${({ theme }) => theme.typograpthy.Logo.textTransform};
  font-size: ${({ theme }) => theme.typograpthy.Logo.FontSize};
  font-weight: ${({ theme }) => theme.typograpthy.Logo.FontWeight};
  letter-spacing: ${({ theme }) => theme.typograpthy.Logo.letterSpacing};
  font-family: ${({ theme }) => theme.typograpthy.Logo.fontFamily};
`;

const BurgerMenuPhoto = styled.img`
  display: none;
  ${media.phone} {
    display: block;
    cursor: pointer;
  }
`;

export default Root;
