import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        //colors
        --primary: #2D3640;
        --secondary: #8B9492;
        --white: #F5F6F0;
        --light-white: #DAE0D4;
        --light-blue: #9DBABC;
        --baby-blue: #ABCCD2;
        --light-grey: #AFBABA;
        --light-green: #23cf68;
        --black: #07090C;

    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: inherit;
    }
    
    //default browser font-size: 16px
    html {
        font-size: 62.5%; //1rem = 10px 10px/16px=62.5%
    }
    
    @media only screen and (max-width: 1200px) { //1200px
        html {
            font-size: 50%; //1rem = 8px 8/16
        }
    }
    
    @media only screen and (max-width: 768px) { //768px
        html {
            font-size: 56%; //1rem=9px 9/16 = 56.25%
        }
    }
    
    @media only screen and (max-width: 480px) { //480px
        html {
            font-size: 48.75%; //1rem = 7.8px 7.8/16
        }
    }
    

    body {
        background-color: var(--primary); 
        font-family: 'Roboto', 'Lato', 'Oswald', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        line-height: 1.7;
    }
`;

export default GlobalStyle;
