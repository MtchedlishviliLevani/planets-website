import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
