import React, { useRef, useState } from "react";

import RootWrapper from "./styled";
import { useUtilsHooks } from "@hooks";

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
      <pre>{JSON.stringify({ utils }, null, 2)}</pre>
    </RootWrapper>
  );
};

export default App;
