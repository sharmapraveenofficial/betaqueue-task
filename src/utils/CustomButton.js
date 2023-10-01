// RingButton.js
import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  position: relative;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  border: 2px solid #76dbe0;
  color: grey;
  background: transparent;
  transition: transform 0.2s;
  min-width: 0px;
  margin-left: -27px;

  &:hover {
    transform: scale(1.05);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: #76dbe0;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
  }

  &::before {
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }

  &::after {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
  }

  &:hover::before,
  &:hover::after {
    opacity: 0.3;
  }
`;

function RingButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default RingButton;
