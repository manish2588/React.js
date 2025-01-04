import styled from "styled-components";
export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "blue" : "gray")};
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
  }
`;
export const AnotherButton = styled(Button)`
  background-color: ${({ primary }) => (primary ? "blue" : "green")};
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  border-color: white;

  &:hover {
    background-color: ${({ primary }) => (primary ? "darkblue" : "darkgray")};
  }
`;

export const theme = {
  primaryColor: "Green",
  secondColor: "Pink",
};
export const ThemedButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor || "Blue"};
  padding: 1em;
`;
