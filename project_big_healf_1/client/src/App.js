import React from "react";

import { BodyPartPicker, Timer } from "@components";

import RootWrapper from "./styled";

const App = () => {
  return (
    <RootWrapper>
      <BodyPartPicker />
      <Timer />
    </RootWrapper>
  );
};

export default App;
