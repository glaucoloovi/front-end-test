import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { GlobalStyle } from "./theme/global";
import RouterConfig from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterConfig />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
