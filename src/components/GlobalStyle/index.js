// Import Global Style
import { createGlobalStyle } from "styled-components";

/**
 * Membuat Global Style.
 * Global Style: CSS Reset, Font.
 * Pindahkan isi index.css ke GlobalStyle
 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
