import styled from "styled-components";

const RootWrapper = styled.div`
  background: ${({
    activated,
    theme: {
      colors: { blue, red },
    },
  }) => (activated ? blue : red)};
  transition: background 0.5s ease-in-out 1s;
`;

export default RootWrapper;
