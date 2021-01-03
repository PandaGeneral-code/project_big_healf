import React from "react";

import bodyParts from "./bodyParts.json";
import Wrapper from "./styled";

const BodyPartPicker = () => {
  return (
    <Wrapper>
      <div>Body Part Picker</div>
      <pre>{JSON.stringify({ parts: Object.entries(bodyParts) }, null, 2)}</pre>
    </Wrapper>
  );
};

export default BodyPartPicker;
