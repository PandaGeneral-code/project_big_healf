import styled from "styled-components";

const RootWrapper = styled.div`
  background: ${({
    theme: {
      colors: { red },
    },
  }) => red};
`;

export default RootWrapper;
