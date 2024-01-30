import styled from "styled-components";
import { media } from "../utils/customMediaBreaks";

function ImageComponent({
  mainImage,
  secondaryImg,
}: {
  mainImage: string | undefined;
  secondaryImg: string | undefined;
}) {
  return (
    <ImgWrapper>
      <img src={mainImage} alt="" />
      {secondaryImg ? <img src={secondaryImg} /> : ""}
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.tablet} {
    margin: 0 auto;
  }

  & > img {
    ${media.tablet} {
      width: 75%;
    }
    /* width: 330px; */
  }

  & > img:nth-child(2) {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 160px;
    top: 85%;
    left: 50%;

    ${media.tablet} {
      top: 105%;
    }
  }
`;

export default ImageComponent;
