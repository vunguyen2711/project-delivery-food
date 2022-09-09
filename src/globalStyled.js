import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* base style */

body {
  background: ${(props) => props.theme.color.white};
  font-family: "Istok Web", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "RocknRoll One", sans-serif !important;
}

a {
  text-decoration: none;
  color: unset;
}

h1, 
h2 {
  font-size: 2.1rem;
  font-weight: 600;
  color:${(props) => props.theme.color.black};
}

section {
  padding: 20px 0px;
}
.routes__container {
  flex:1;
}

`;
