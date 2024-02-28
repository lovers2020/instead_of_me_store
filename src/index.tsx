import React from "react";
import ReactDOM from "react-dom/client";
import reset from "styled-reset";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: white; 
        color:white;
        font-family: "Pretendard",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box; 
        height: 100%;
        line-height: 1.6;    
        overflow-x: hidden; 
        position:relative; 
    } 
    a {
    text-decoration: none;
    }
    * {
    box-sizing: border-box;
    }
`;
root.render(
    <ChakraProvider>
        <HelmetProvider>
            <GlobalStyle />
            <App />
        </HelmetProvider>
    </ChakraProvider>
);
