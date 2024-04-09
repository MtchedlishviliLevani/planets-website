import styled from "styled-components";
import { media } from "../utils/customMediaBreaks";
import { motion } from "framer-motion"

function ImageComponent({
  mainImage,
  secondaryImg,
}: {
  mainImage: string | undefined;
  secondaryImg: string | undefined;
}) {
  console.log(23)
  return (
    <ImgWrapper>
      <motion.img
        key={mainImage}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, }} // Corrected transition duration
        src={mainImage} alt=""
      />
      {secondaryImg ? (
        <motion.img
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }} // Corrected transition duration
          src={secondaryImg}
        />
      ) : (
        ""
      )}
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
