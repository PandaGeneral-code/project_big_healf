import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background-color: ${({ primary = false }) => (primary ? "#E9E9FF" : "white")};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: ${({ primary = false }) => primary && "bold"};
  height: 60px;
  margin-bottom: 10px;
  outline: 0;

  &:active {
    background-color: #e9e9ffaa;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 32px;
  box-sizing: border-box;
  height: 600px;
  padding: 20px;
  width: 350px;
`;

export default Wrapper;
