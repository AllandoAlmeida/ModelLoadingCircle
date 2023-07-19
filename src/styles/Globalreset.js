import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
:root{
    box-sizing: border-box;
    overflow: hidden;
     background: radial-gradient(
    lightcyan, black
  );
}

body{
    margin: 0;
    padding:0;
}

`