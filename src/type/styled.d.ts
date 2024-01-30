import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryTextColor: string;
      backgroundColor: string;
      BrightGray: string;
      Earth: string;
      Waterloo: string;
      Mercury: string;
      Venus: string;
      PurpleHeart: string;
      Mars: string;
      Jupiter: string;
      Saturn: string;
      Uranus: string;
      Neptune: string;
    };
    typograpthy: {
      NavigationLink: {
        FontSize: string;
        FontWeight: number;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
        fontFamily: string;
      };
      Logo: {
        FontSize: string;
        FontWeight: number;
        lineHeight: string;
        letterSpacing: string;
        textTransform: string;
        fontFamily: string;
      };
      PlanetTitle: {
        FontSize: string;
        FontWeight: number;
        lineHeight: string;
        textTransform: string;
        fontFamily: string;
      };
      Paragraph: {
        FontSize: string;
        FontWeight: number;
        lineHeight: string;
        textTransform: string;
        fontFamily: string;
      };
      PlanetContentTopic: {
        FontSize: string;
        FontWeight: number;
        lineHeight: string;
        textTransform: string;
        fontFamily: string;
      };
      GeneralInformationBoxes: {
        title: {
          color: string;
          fontFamily: string;
          fontSize: string;
          fontStyle: string;
          fontWeight: number;
          lineHeight: string;
          letterSpacing: string;
          textTransform: string;
        };
        content: {
          fontFamily: string;
          fontSize: string;
          fontStyle: string;
          fontWeight: number;
          lineHeight: string;
          letterSpacing: string;
          textTransform: string;
        };
      };
    };
  }
}
