import { createGlobalStyle } from "styled-components";
import background from "../assets/images/background.svg";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        
        width: 100%;
        background-size: 100%;
        font-family: 'Antonio', sans-serif;
background-image:url(${background});
animation: moveUp 20s ease-in-out infinite;
    }
    @keyframes moveUp {
  0% {
    background-position: 0 0;
  }
  
  100% {
    background-position: 100% 100%;

  }
    }
`;

export default GlobalStyle;
