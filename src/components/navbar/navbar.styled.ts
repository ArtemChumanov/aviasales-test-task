import styled from "styled-components";

export const NavbarFilter = styled.div`
  width: 502px;
  height: 50px;
  display: flex;
  box-shadow: 0 0 2px black;
  border-radius: 5px;
`;
export const ButtonFilter = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  background: #dfe5ec;
  border: 1px solid silver;
  &:active,
  &:focus {
    background: #2196f3;
    color: white;
  }
`;
