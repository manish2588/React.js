import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
 `;

 export const AnimateDiv=styled.div`
 animation: ${fadeIn} 2s ease-in-out;

`;

 const butttonfadeIn=keyframes`
  from{
    opacity:0;
    background-color: blue;
    transform: scale(1);
  }
 to{
    opacity: 1;
    background-color: green;
    transform: scale(1.25);
 }
 `;
  export const AnimateBUtton=styled.button`
  padding:20px 20px;
  animation: ${butttonfadeIn} 2s ease-in-out;
  background-color: blue;
  border-radius:10px;
  &:hover{
    transform: scale(1.25);
    background-color: lightgreen;
    transition: 1s;
  }
 `