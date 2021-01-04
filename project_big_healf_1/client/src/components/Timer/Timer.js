import React from "react";

import Wrapper, { ButtonContainer, StyledButton } from "./styled";
import icon from "./ellipse.svg";

const Timer = ({ dark = false, subTask = "New Sub Task" }) => {
  return (
    <Wrapper dark={dark}>
      <img alt="icon" src={icon} />
      <h1>{subTask}</h1>
      <ButtonContainer>
        <StyledButton primary>Finish</StyledButton>
        <StyledButton>Quit</StyledButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Timer;
