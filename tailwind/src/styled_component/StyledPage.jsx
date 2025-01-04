import {  ThemeProvider } from "styled-components";
import { theme, ThemedButton } from "./Button";
import { AnimateBUtton, AnimateDiv } from "./Animation";

function StyledPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Styled COmponent Example</h1>
        <ThemedButton primaryColor>Themed Button</ThemedButton>
      </ThemeProvider>
      <AnimateDiv className="w-full  bg-slate-400">Hello this is Animated Div</AnimateDiv>
      <AnimateBUtton>ANimated BUtton</AnimateBUtton>
    </>
  );
}

export default StyledPage;
