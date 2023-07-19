import styled from "styled-components";


export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
display: flex;
align-items: center;
justify-content: center;

`

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

p{
  font-size:1.2rem;
font-weight: 500;
}
  .spinner {
    width: 80px;
    height: 80px;
    border: 15px solid rgba(255, 255, 255, 0.1);
    border-top-color: #09d;
    border-bottom-color: #11d;
    border-right-color: #36d;
    border-left-color: #55d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
