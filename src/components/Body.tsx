import { useState } from "react";
import data from "../data/data";
import styled from "styled-components";
import PlanetGeneralInformation from "./PlanetGeneralInformation";
import { topicMapping } from "../data/data";
import ImageComponent from "./ImageComponent";
import { arr, arr2 } from "../data/data";
import { media } from "../utils/customMediaBreaks";

interface TopicContainerProps {
  $activestyled: number;
  $index: number;
  key: number;
  $activeColor: string;
}

function Body({
  activeIndex,
  activeColor,
}: {
  activeIndex: number;
  activeColor: string;
}) {
  const [activeStyle, setActiveStyle] = useState(0);
  type TopicKey = "overview" | "internal_structure" | "surface_geology";
  const [activeTopic, setActiveTopic] = useState<TopicKey>("overview");
  function setActiveTopicTitle(text: string, index: number) {
    const mappedTopic = Object.entries(topicMapping).find(([key]) =>
      text.includes(key)
    );

    if (mappedTopic) {
      const [, topic] = mappedTopic; // Destructure the array
      setActiveTopic(topic as TopicKey); // Type assertion
    }
    setActiveStyle(index);
  }
  // main and secondary image sources
  const mainImageSrc: string | undefined =
    data[activeIndex].information[activeTopic].imageSource;
  const secondaryImage: string | undefined =
    data[activeIndex].information[activeTopic].secondary_img;

  return (
    <>
      <main>
        <Main_Wrapper $activeIndex={activeIndex}>
          <ImageComponent
            mainImage={mainImageSrc}
            secondaryImg={secondaryImage}
          />
          <div>
            <div>
              <H1>{data[activeIndex].title}</H1>
              <P>{data[activeIndex].information[activeTopic].content}</P>
              <SourceWrapper>
                <span>Source :</span> <span>Wikipedia</span>{" "}
                <img src="../../src/assets/images/source-icon.svg" alt="" />
              </SourceWrapper>
            </div>
            <div>
              <ContentTopicWrapper>
                {arr.map((value, index) => (
                  <TopicContainer
                    key={index}
                    onClick={() => setActiveTopicTitle(value, index)}
                    $activestyled={activeStyle}
                    $index={index} // Pass the index as a prop
                    $activeColor={activeColor}
                  >
                    <h2>{value}</h2>
                    <h2> {arr2[index]}</h2>
                  </TopicContainer>
                ))}
              </ContentTopicWrapper>
            </div>
          </div>
        </Main_Wrapper>

        <InformationBoxesWrapper>
          <PlanetGeneralInformation
            title="ROTATION TIME"
            content={
              data[activeIndex].additionalInformation.rotation_time_value
            }
          />
          <PlanetGeneralInformation
            title="REVOLUTION TIME"
            content={
              data[activeIndex].additionalInformation.revolution_time_value
            }
          />
          <PlanetGeneralInformation
            title="RADIUS"
            content={data[activeIndex].additionalInformation.radius_value}
          />
          <PlanetGeneralInformation
            title="AVERAGE TEMP."
            content={data[activeIndex].additionalInformation.average_temp_value}
          />
        </InformationBoxesWrapper>
      </main>
    </>
  );
}

const TopicContainer = styled.button<TopicContainerProps>`
  all: unset;
  border: solid rgba(256, 256, 256, 0.2) 1px;
  padding: 10px;
  background: ${(props) =>
    props.$activestyled === props.$index ? props.$activeColor : ""};
  cursor: pointer;
  transition: background-color .7s ease-out;
  
  &:hover {
    background: ${(props) =>
    props.$activestyled !== props.$index ? "#D8D8D8" : ""};
  }
  ${media.tablet} {
    padding: 8px;
  }

  ${media.phone} {
    background-color: transparent;
    border-width: 0 0 4px 0;
    border-color: ${(props) =>
    props.$activestyled === props.$index
      ? props.$activeColor
      : "transparent"};
  }
  & > h2 {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: ${({ theme }) => theme.typograpthy.PlanetContentTopic.FontSize};
    font-weight: ${({ theme }) =>
    theme.typograpthy.PlanetContentTopic.FontWeight};
    font-family: ${({ theme }) =>
    theme.typograpthy.PlanetContentTopic.fontFamily};
    text-transform: ${({ theme }) =>
    theme.typograpthy.PlanetContentTopic.textTransform};
    line-height: ${({ theme }) =>
    theme.typograpthy.PlanetContentTopic.lineHeight};
    ${media.tablet} {
      font-size: 9px;
      letter-spacing: 1.92px;
    }
  }
  & > h2:nth-child(2) {
    display: none;
    ${media.phone} {
      display: block;
    }
  }

  & > h2:nth-child(1) {
    ${media.phone} {
      display: none;
    }
  }
`;

const InformationBoxesWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 100px 0;

  ${media.phone} {
    flex-direction: column;
  }
`;

const Main_Wrapper = styled.div<{ $activeIndex: number }>`
  margin-top: 106px;
  margin-top: ${(props) =>
    props.$activeIndex === 4
      ? "70px"
      : props.$activeIndex === 5
        ? "40px"
        : "106px"};
  display: flex;
  gap: 15%;
  justify-content: center;

  ${media.tablet} {
    flex-direction: column;
  }
  & > div {
    flex-grow: 1;
    width: 50%;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: ${(props) =>
    props.$activeIndex == 5 ? "center" : "flex-start"};
    flex-direction: column;

    ${media.tablet} {
      flex-direction: row;
      width: 100%;
      margin-top: 180px;
      justify-content: space-between;
    }

    ${media.phone} {
      flex-direction: column;
    }
  }

  & > div > div:nth-child(1) {
    ${media.tablet} {
      width: 49%;
    }

    ${media.phone} {
      width: 100%;
    }
  }

  & > div > div:nth-child(2) {
    ${media.tablet} {
      width: 40%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    ${media.phone} {
      width: 100%;
    }
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-family: ${({ theme }) => theme.typograpthy.PlanetTitle.fontFamily};
  font-weight: ${({ theme }) => theme.typograpthy.PlanetTitle.FontWeight};
  font-size: ${({ theme }) => theme.typograpthy.PlanetTitle.FontSize};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.typograpthy.PlanetTitle.lineHeight};

  ${media.tablet} {
    font-size: 48px;
  }

  ${media.phone} {
    font-size: 40px;
    text-align: center;
  }
`;
const P = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.typograpthy.Paragraph.FontSize};
  font-weight: ${({ theme }) => theme.typograpthy.Paragraph.FontWeight};
  line-height: ${({ theme }) => theme.typograpthy.Paragraph.lineHeight};
  text-transform: ${({ theme }) => theme.typograpthy.Paragraph.textTransform};
  font-family: ${({ theme }) => theme.typograpthy.Paragraph.fontFamily};
  margin: 23px 0;

  ${media.tablet} {
    font-size: 11px;
  }

  ${media.phone} {
    text-align: center;
  }
`;

const SourceWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${media.phone} {
    justify-content: center;
  }
  & > span {
    font-family: "'League Spartan', sans-serif";
    font-size: 14px;
  }
  & > span:nth-child(1) {
    color: rgb(256, 256, 256, 0.2);
  }

  & > span:nth-child(2) {
    text-decoration: underline;
    color: rgb(256, 256, 256, 0.6);
    font-weight: 700;
    line-height: 25px;
  }
`;
const ContentTopicWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${media.tablet} {
    margin-top: 20px;
    gap: 25px;
    flex-direction: column;
    justify-content: space-between;
  }

  ${media.phone} {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 0 5%;
    left: 50%;
    top: 13%;
    border: solid rgb(256, 256, 256, 0.1) 1px;
    border-width: 0 0 2px 0;
    flex-direction: row;
  }
`;

export default Body;
