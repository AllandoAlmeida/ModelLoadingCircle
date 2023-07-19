import React from "react";
import { StyledSection, StyledDiv } from "./style";

export const Loading = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <div className="spinner"></div>
        <p>Carregando...</p>
      </StyledDiv>
    </StyledSection>
  );
};
