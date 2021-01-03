import React, { useRef, useState } from "react";

import { BodyPartPicker } from "@components";
import { useUtilsHooks } from "@hooks";

import RootWrapper from "./styled";

const App = () => {
  const rootWrapperActivatedRef = useRef(false);
  const [rootWrapperActivated, setRootWrapperActivated] = useState(
    rootWrapperActivatedRef.current
  );
  const { test, utils } = useUtilsHooks();

  const handleClick = () => {
    test();
    rootWrapperActivatedRef.current = !rootWrapperActivatedRef.current;
    setRootWrapperActivated(() => rootWrapperActivatedRef.current);
  };

  return (
    <RootWrapper activated={rootWrapperActivated}>
      <div>App</div>
      <button onClick={handleClick}>TEST</button>
      <BodyPartPicker />
      <pre>{JSON.stringify({ utils }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
