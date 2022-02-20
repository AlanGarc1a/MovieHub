import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #1A374D;
        --secondary: #406882;
        --dark-blue: #6998AB;
        --grey: #eeeeee;
        --dark: #041C32;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--primary);
        font-family: 'Roboto', 'Lato', 'Oswald', sans-serif;
        font-family: 400;
        box-sizing: border-box;
        line-height: 1.7;
    }
`;

export default GlobalStyle;