import styled from "styled-components";
import { media } from "../utils/customMediaBreaks";

function PlanetGeneralInformation({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <Box>
      <H3>{title}</H3>
      <Content>{content}</Content>
    </Box>
  );
}

const Box = styled.div`
  width: 90%;
  padding: 23px 0px 27px 23px;
  border: solid rgb(256, 256, 256, 0.2) 1px;
  ${media.tablet} {
    padding: 15px;
  }
  ${media.phone} {
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
`;

const H3 = styled.h3`
  color: ${({ theme }) =>
    theme.typograpthy.GeneralInformationBoxes.title.color};
  font-family: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.fontFamily};
  font-size: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.fontSize};
  font-style: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.fontStyle};
  font-weight: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.fontWeight};
  line-height: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.letterSpacing};
  text-transform: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.title.textTransform};
  @media screen and (max-width: 1100px) {
    font-size: 8px;
    letter-spacing: 0.8px;
    line-height: 16px;
  }
  @media screen and (max-width: 768px) {
    line-height: initial;
  }
`;

const Content = styled.span`
  color: #fff;
  margin-top: 5px;
  font-family: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.fontFamily};
  font-size: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.fontSize};
  font-style: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.fontStyle};
  font-weight: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.fontWeight};
  line-height: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.letterSpacing};
  text-transform: ${(props) =>
    props.theme.typograpthy.GeneralInformationBoxes.content.textTransform};

  ${media.tablet} {
    font-size: 24px;
    letter-spacing: -0.9px;
  }
  ${media.phone} {
    font-size: 20px;
    margin-top: initial;
  }
`;

export default PlanetGeneralInformation;
