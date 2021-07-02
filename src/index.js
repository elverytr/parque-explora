import React from "react";
import "./styles/scss/main.scss";
import ReactDOM from "react-dom";
import Routes from "./routers/Routes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


//Theme for chakra provider
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#eeeeee",
        color: "black",
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
