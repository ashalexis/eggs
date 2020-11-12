import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.commonText};
    font-family: 'Raleway', sans-serif;
    transition: all 0.50s linear;
  }
`;
